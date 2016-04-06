// Contact Form Validation

function formValidate() {
	var lettersChar = /^[A-za-z]+$/
	var numbersChar = /^[0-9]+$/
 	var invalidChar = /[\(\)\<\>\,\;\:\\\"\[\]!\#\%\*\~\\&\$]/
	var e = document.forms["contact"]["emailAdd"].value
	var posAt = e.indexOf("@")
	var posDot = e.lastIndexOf(".")
	var emailAtError = e.split('@').length-1
	
    //First Name validation
	if (contact.name.value =="") {
		alert("Please type in your name.");
		return false
    }	
	if (contact.name.value.match(numbersChar) || contact.name.value.match(invalidChar)) {
		alert("Please enter characters only for your name.");
		return false
    }
	if (contact.name.value.length < 2) {
		alert("Your name does not have enough characters.");
		return false	
    }	
	//Email Address validation
	if (posAt <= 1 || posDot < posAt+2 || posDot+2 >= e.length || emailAtError > 1 || e.match(invalidChar)){
		alert("You do not have a valid email address. Please try again.");
		return false
	}
	if (contact.emailAdd.value =="") {
		alert("Please type in your email address.");
		return false
    }
	//Phone number validation
	if (contact.phone.value =="000-000-0000" || contact.phone.value.match(lettersChar) || contact.phone.value =="000.000.0000" || contact.phone.value.length < 12 || contact.phone.value.length > 12 || contact.phone.value.match(invalidChar)) {
		alert("Please use xxx-xxx-xxxx or xxx.xxx.xxxx format for your phone number.");
		return false	
	}		

}