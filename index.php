<?php
    include("config/login.php");
               
                             
    if(userLoggedIn())
    {
        redirectToCorrectDashboard();
    }
    else
    {
        if ( !empty( $_POST ) && !empty($_POST['username']) && !empty($_POST['password']) ) 
        {
            $username = $_POST[ 'username' ];
            $password = encrypt($_POST['password']);

            if(checkCorrectUser($username, $password))
            {
                setUserCredentials($username, $password);
                redirectToCorrectDashboard();
            }
            else
            {
                echo "Login unsuccessfull.<hr />";
            }
        }      
    }     


    //START INSERT GENERATED CODE HERE
?> 

<!doctype html>
<html data-n-head="">
  <head>
    <title data-n-head="true">Finance Viewer</title><meta data-n-head="true" charset="utf-8"><meta data-n-head="true" name="viewport" content="width=device-width,initial-scale=1"><meta data-n-head="true" data-hid="description" name="description" content="Finance Viewer for everyone"><link data-n-head="true" rel="icon" type="image/x-icon" href="/favicon.ico"><link rel="preload" href="/_nuxt/f56b2489c06eafdd9428.js" as="script"><link rel="preload" href="/_nuxt/2016db8774d371ebecf4.js" as="script"><link rel="preload" href="/_nuxt/122bbd625259c9b3a6c4.js" as="script"><link rel="preload" href="/_nuxt/d559f1fd73ccaa6f9f35.js" as="script">
  </head>
  <body data-n-head="">
    <div id="__nuxt"><style>#nuxt-loading{visibility:hidden;opacity:0;position:absolute;left:0;right:0;top:0;bottom:0;display:flex;justify-content:center;align-items:center;flex-direction:column;animation:nuxtLoadingIn 10s ease;-webkit-animation:nuxtLoadingIn 10s ease;animation-fill-mode:forwards;overflow:hidden}@keyframes nuxtLoadingIn{0%{visibility:hidden;opacity:0}20%{visibility:visible;opacity:0}100%{visibility:visible;opacity:1}}@-webkit-keyframes nuxtLoadingIn{0%{visibility:hidden;opacity:0}20%{visibility:visible;opacity:0}100%{visibility:visible;opacity:1}}#nuxt-loading>div,#nuxt-loading>div:after{border-radius:50%;width:5rem;height:5rem}#nuxt-loading>div{font-size:10px;position:relative;text-indent:-9999em;border:.5rem solid #f5f5f5;border-left:.5rem solid #fff;-webkit-transform:translateZ(0);-ms-transform:translateZ(0);transform:translateZ(0);-webkit-animation:nuxtLoading 1.1s infinite linear;animation:nuxtLoading 1.1s infinite linear}#nuxt-loading.error>div{border-left:.5rem solid #ff4500;animation-duration:5s}@-webkit-keyframes nuxtLoading{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes nuxtLoading{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}</style><script>window.addEventListener("error",function(){var e=document.getElementById("nuxt-loading");e&&(e.className+=" error")})</script><div id="nuxt-loading" aria-live="polite" role="status"><div>Loading...</div></div></div>
  <script type="text/javascript" src="/_nuxt/f56b2489c06eafdd9428.js"></script><script type="text/javascript" src="/_nuxt/2016db8774d371ebecf4.js"></script><script type="text/javascript" src="/_nuxt/122bbd625259c9b3a6c4.js"></script><script type="text/javascript" src="/_nuxt/d559f1fd73ccaa6f9f35.js"></script></body>
</html>


<?php 
 //END INSERT GENERATED CODE HERE
 ?>