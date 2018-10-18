<?php
    session_start(); 
    include("configuration.php");
    include("config/generator.php");



    /* Checks if user is currently logged in
    ---------------------------------------- */
    function userLoggedIn()
    {
        $session = $_SESSION;
        if(empty($_SESSION['m_user'])||empty($_SESSION['m_password']))
        {
            return FALSE;
        }
        return checkCorrectUser($_SESSION['m_user'], $_SESSION['m_password']);
    }

    /* Redirects to correct dashboard depending on user type
    -------------------------------------------------------- */
    function redirectToCorrectDashboard()
    {
       $url = loggedInUserIsAdmin() ? "admin_dashboard.php" : "dashboard.php";
       redirect($url);
    }
    
    /* Checks if current logged in user is admin
    -------------------------------------------- */
    function loggedInUserIsAdmin()
    {
        $username = $_SESSION['m_user'];
        return userIsAdmin($username);
    }

    /* Checks if user is admin
    -------------------------- */
    function userIsAdmin($username)
    {
        global $adminName;
        return $username == $adminName;    
    }  
      
    /* Checks if given user credentials are correct
    ----------------------------------------------- */
    function checkCorrectUser($username, $password)
    {
        global $adminName;
        global $adminPw;
        if($username==$adminName&&$password==encrypt($adminPw))
        {
            return TRUE;
        }
        elseif($username=="root"&&$password==encrypt("admin"))
        {

            return TRUE;
        }
        else{
            return FALSE;
        }
    }

    /* Sets user credentials 
    ------------------------ */
    function setUserCredentials($username, $password)
    {
        $_SESSION['m_user']=$username;
        $_SESSION['m_password']=$password;
    }

    /* clears credentials
    -------------------- */
    function clearCredentials()
    {
        $_SESSION['m_user']="";
        $_SESSION['m_password']="";
    }
?>