<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<title>Thank You</title>
<style type="text/css">
<!--
body {
	font-family: Arial, Helvetica, sans-serif;
	font-size: 1em;
	color: black;
	margin: 2em 2em 3em 2em;
	background-size: 100%;
	background: #fff url("../images/meBackground.jpg") no-repeat fixed center top;
}
a {
	font-size: 2em;
	color: #FF0098;
	font-weight: bold;
}
a:link {
	text-decoration: none;
}
a:visited {
	text-decoration: none;
	color: #FF0098;
}
a:hover {
	text-decoration: none;
	color: #000;
}
a:active {
	text-decoration: none;
	color: #FF0098;
}
.jumboHeader {
	width: 40%;
	padding: 0 0 1em 0;
	float: left;
}
p {
	clear: both;
}
@media screen and (max-width: 600px) {

	a 	{
		font-size: 1.5em;
		color: #FF0098;
		font-weight: bold;
		margin-right: auto;
		margin-left: auto;
	}
	a:link {
		text-decoration: none;
	}
	a:visited {
		text-decoration: none;
		color: #FF0098;
	}
	a:hover {
		text-decoration: none;
		color: #000;
	}
	a:active {
		text-decoration: none;
		color: #FF0098;
	}
	.jumboHeader {
		width: 97%;
		margin: 1em auto;
	}
	p {
		margin: 0em auot;
	}
}
-->
</style>
</head>

<body>

<!-- Most of this code is from my other site's contact form, except for the checkbox stuff, that was from (http://stackoverflow.com/questions/17585300/contact-form-with-check-boxes-having-troubles)
I updated the callback to match my form.-->

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

<img class="jumboHeader" src="../images/melogo_remixed.png" alt="ME Innovation Remixed Logo" />
<p>Thank you. Your message has been sent.</p>
<p>&nbsp;</p>
<p><a href="../index.html">Back to ME Innovation</a></p>
</body>
</html>