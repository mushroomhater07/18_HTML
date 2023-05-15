<?php
$name = $_POST['name'];
$visitor_email = $_POST['email'];
$message = $_POST['message'];
$email_subject = "Form submission";
$email_body = "Username: $name.\n" . "UserEmail: $visitor_email.\n" . "User Message: $message.\n";
$body =  nl2br("User: $name \n\n\n Email: $visitor_email \n\n\n Message: $message");
//設定time out
set_time_limit(120);
//echo !extension_loaded('openssl')?"Not Available":"Available";

require_once("./PHPMailer-5.2.9/PHPMailerAutoload.php"); //記得引入檔案 
$mail = new PHPMailer;

//$mail->SMTPDebug = 3; // 開啟偵錯模式

$mail->IsSMTP(); // Set mailer to use SMTP
$mail->Host = 'ssl://smtp.gmail.com'; // Specify main and backup SMTP servers
$mail->SMTPAuth = true; // Enable SMTP authentication
$mail->Username = 'hheyllau@gmail.com'; // SMTP username
$mail->Password = 'hey888##'; // SMTP password
$mail->SMTPSecure = 'tls'; // Enable TLS encryption, `ssl` also accepted
$mail->Port = 465; // TCP port to connect to

$mail->setFrom('hheyllau@gmail.com', 'hey'); //寄件的Gmail
$mail->addAddress('23lauh@westbuckland.com', 'hey'); // 收件的信箱

$mail->isHTML(true); // Set email format to HTML

/*
    內文
*/

$mail->Subject = $email_subject;
$mail->Body = $body;
$mail->AltBody = 'This is the body in plain text for non-HTML mail clients';

if(!$mail->send()) {
 echo 'Message could not be sent.';
 echo 'Mailer Error: ' . $mail->ErrorInfo;
} else {
 echo 'Message has been sent. ----- the service is:';
 echo !extension_loaded('openssl')?"Not Available":"Available";
}
header( "Refresh:3; url=index.html");

?> 
