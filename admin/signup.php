<?php 

// grab abs paths
require_once '../load.php';


// check if each input is filled, if so, perform registration function. if not, display error message
if(isset($_POST['submit'])){
    $name = trim($_POST['name']);
    $email = trim($_POST['email']);
    $message = trim($_POST['message']);

    if(!empty($name) && !empty($message) && !empty($email)){
        $submitMsg = submit($name, $message, $email);
        header('Refresh:0;url=../sent');
    }else{
        $submitMsg = 'Please fill out the required field';
    }
}

?>