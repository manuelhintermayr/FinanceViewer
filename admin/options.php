<?php
    //TODO: reverse ! on both first ifs
    error_reporting(E_ERROR | E_PARSE);

    $path = $_SERVER['DOCUMENT_ROOT'];
    include($path."/config/login.php");
    $_POST = json_decode(file_get_contents("php://input"),true);

    if(userLoggedIn())
    {
        header('HTTP/1.1 403 Forbidden');
        echo "Not logged in.";
    }
    else{
        if(loggedInUserIsAdmin())
        {
            header('HTTP/1.1 403 Forbidden');
            echo "Logged in user is not admin.";
        }
        else{
            if(isset($_GET) && isset($_GET['action']))
            {
                $action = $_GET['action'];
                switch($action)
                {
                    case 'getUsers':
                        getUsers();
                        break;
                    case 'setView':
                        setView();
                        break;
                    case 'addUser':
                        addUser();
                        break;
                    default:
                        actionNotSupported($action);
                }
            }
            else{
                header('HTTP/1.1 400 Bad request');
                echo 'Bad request.'; 
            }
            
            
        }
    }

    function getUsers()
    {
        global $mysqli;

        global $mysqli;
        $sql = "SELECT * FROM fv_users;";
        $result = $mysqli->query($sql);
        
        $resultArray = array();
        if ($result){
            while($row = $result->fetch_assoc()) 
            {
                $user = array(
                    'username' => $row['u_name'],
                    'firstname' => $row['u_firstName'],
                    'lastname' => $row['u_lastName'],
                    'isLocked' => $row['u_isLocked']=="0"?FALSE:TRUE,
                    'years' => getYearsForUser($row['u_name'])
                );
                $resultArray[] = $user;
            }
            echo json_encode($resultArray);
        }
        else{
            echo '{}';
        }
    }

    function addUser()
    {
        if(isset($_POST['username'])
        &&isset($_POST['firstname'])
        &&isset($_POST['lastname'])
        &&isset($_POST['isLocked'])
        &&isset($_POST['password'])
        &&isset($_POST['years'])
        &&$_POST['username']!=''
        &&$_POST['username']!=' '
        &&$_POST['firstname']!=''
        &&$_POST['firstname']!=' '
        &&$_POST['lastname']!=''
        &&$_POST['lastname']!=' '
        &&$_POST['isLocked']!=' '
        &&$_POST['password']!=''
        &&$_POST['password']!=' '
        &&$_POST['years']!=''
        &&$_POST['years']!=' '
        &&!empty($_POST['years']))
        {
            $username = mysql_real_escape_string($_POST['username']);
            $firstname = mysql_real_escape_string($_POST['firstname']);
            $lastname = mysql_real_escape_string($_POST['lastname']);
            $isLocked = mysql_real_escape_string($_POST['isLocked']);
            $password = encrypt($_POST['password']);
            $years = $_POST['years'];
            foreach($years as &$year) 
            {
                $year = mysql_real_escape_string($year);
            }

            
            
        }
        else{
           header('HTTP/1.1 400 Bad request');
           echo "Not all values are set.";
        }
    }

    function setView()
    {
       if(isset($_POST['username']))
       {
           $_SESSION['m_view_username'] = $_POST['username'];
           echo json_encode(array('message' => "Username for view set."));
       } 
       else{
           header('HTTP/1.1 400 Bad request');
           echo "Username is not set.";
       }
    }

    function actionNotSupported($action)
    {
       header('HTTP/1.1 400 Bad request');
       echo "Action $action is not supported."; 
    }

?>

