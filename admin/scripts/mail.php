  
<?php 
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

// Was advised to use phpmailer as a quick alternative to a full api
// Call in the files from the folder using abspath, check for
// registration and perform the function


function submit($name, $message, $email){

    // UPDATE THIS LATER. Need to send email to users already submited
    
        $mail = new PHPMailer();

        $mail->isSMTP();
        $mail->Host = 'tls://smtp.gmail.com';
        $mail->SMTPSecure='tls';
        $mail->Port = 587;
        $mail->SMTPAuth=true;

        $mail->Username='thorntoncustomstest@gmail.com';
        $mail->Password='dmgfrhcnwsnfaufu';

        $mail->addAddress('thorntoncustomstest@gmail.com');
        $mail->setFrom($email);
        
        $mail->isHTML(true);
        $mail->Subject="$name is trying to contact you"; 
        $mail->Body="$name @ $email Is Sending You an Email: <br> $message";

        if(!$mail->send()){
            $submitMsg= $mail->ErrorInfo;
        }
}