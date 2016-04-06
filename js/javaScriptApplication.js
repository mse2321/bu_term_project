// JavaScript Document

alert("Welcome to my JavaScript application")
document.write("<h1>Welcome to my JavaScript application.</h1>")

var prpt = prompt("Please type in your name")
	alert("Your name is " + prpt)
	document.write("<p>Your name is " + "<span>" + prpt + "</span>" + "</p>")
	

var prptNum = prompt("Please enter a number")
var prptNum2 = prompt("Please enter a second number")
var prptResult = parseInt(prptNum) + parseInt(prptNum2)
	alert("The sum of your two numbers is " + prptResult)
	document.write("<p>The sum of your two numbers is " + "<span>" + prptResult + "</span>" + "</p>")

alert("Thank you for using my JavaScript application!")
document.write("<h2>Thank you for using my JavaScript application!</h2>")