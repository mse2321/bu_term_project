<?php 
$ToEmail = 'mse233@gmail.com'; 
$EmailSubject = 'ME Innovation contact form'; 
$mailheader .= "'From: '.$_POST['emailAdd'].'\r\n'"; 
$mailheader .= "'Reply-To: '.$_POST['emailAdd'].'\r\n'"; 
$mailheader .= "Content-type: text/html; charset=iso-8859-1\r\n"; 
$MESSAGE_BODY .= "'Name: '.$_POST['name']"; 
$MESSAGE_BODY .= "'Email: '.$_POST['emailAdd']";
$MESSAGE_BODY .= "'Phone: '.$_POST['phone']";
$MESSAGE_BODY .= "What type of help are you looking for?: ";
if(isset($_POST['checkval'])){
	foreach($_POST['checkval'] as $value){
		$MESSAGE_BODY .= $value;
		$MESSAGE_BODY .= ' ';
		}
	}
$MESSAGE_BODY .= "'Message: '.nl2br($_POST['message'])"; 
mail($ToEmail, $EmailSubject, $MESSAGE_BODY, $mailheader) or die ("Failure"); 
?>