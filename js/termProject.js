// JavaScript Document


/* Got this code from (http://stackoverflow.com/questions/1302306/how-to-pull-the-file-name-from-a-url-using-javascript-jquery). 
I needed a way to reinforce the responsiveness of the site for the secondary pages differently than the home page. 
Concepts for the course helped me to understand what it's trying to do.
I did change the variable names. This script here fuels the two scripts that follow it.*/
var mobileTransform = $(window).width()
	pageIndex = document.location.pathname
	pageURL = pageIndex.substr(pageIndex.lastIndexOf('/') + 1)
	pageName = String(pageURL)

//Allow for navigation to be rearranged in mobile in tandem with my media query. I used the lecture examples for the last line of code.
$(function mobileWidthOther() {
	if (mobileTransform <= 400 && pageName != "index.html") {
	$(".navClass").insertAfter( $(".jumboHeader") )	 
	}
})

//This code came from the same source as the first script. Again I used the JQuery examples from the lecture and assignments to code this.
$(function mobileWidth() {
	if (mobileTransform <= 400) {
	$(".navClass").insertAfter( $(".homeImage") ) 
	}
})
$(function mobileWidthLinkedIn() {
	if (mobileTransform <= 400) {
	$("#linkedIn").insertBefore( $(".jumboHeader") ) 
	}
})
//Learned this from course assignment.
$(function IntroText() {
	   $("p#homeImageText").hide()
})
//Looked this up from JQuery's documentation
$(function() {
		$( $("p#homeImageText") ).slideDown("slow", "linear") 
})
//I figured this out myself after looking up part of it from JQuery's documentation
$(function changeGallerImageDesign() {
	$("#thumblist img").click(function() {
	   var gsrc=$(this).attr("src")
	   var galt=$(this).attr("alt")
	   var pgsrc = gsrc.replace()
	   var pgalt = galt.replace()
            $("#thumbnail").attr("src",pgsrc)
			$("#thumbnail").attr("alt",pgalt)	
	})
})
//Some of this code is from (http://stackoverflow.com/questions/20165212/how-to-print-date-and-time-with-jquery). I added the year after looking it up in the JQuery documentation. Updated variables and formatting.

$(function () {
	var todayDate = new Date()
	var yearMonths = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
	var formalDate = (yearMonths[todayDate.getMonth()] + " " + todayDate.getDate())
	var theYear = todayDate.getFullYear()
	$("#meBoardInner").html("Today is " + formalDate + "," + " " + theYear)
})
