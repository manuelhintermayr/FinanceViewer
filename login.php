<?php

    $_POST = json_decode(file_get_contents("php://input"),true);

    if(isset($_POST) && isset($_POST['username'])) {
        $username = $_POST['username'];
        $password = $_POST['password'];

        if($username=="admin"&&$password=="admin") {
            $userPrefs = array(  
                'name' => 'Administrator',
                'url' => 'admin'
            );
            echo json_encode($userPrefs);
        }
        else {
            header('HTTP/1.1 403 Forbidden');
            echo "Login invalid {try user=\"admin\", password=\"admin\"}";
        }
    }
    else {
        header('HTTP/1.1 400 Bad request');
        echo 'Bad request. Please go to <a href="index.php">this</a> page and try again.'; 
    }
?>