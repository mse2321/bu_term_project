// JavaScript Showcase
var cloneElem = $("div#imageContainer").clone()

// To show all images
$(function show() {
	$("#show").click(function() {
	   $("div#imageContainer img").show()
	   $("#results").html("You have selected to show all images")
	})
})

// To hide all images
$(function hide() {
	   $("#hide").click(function(restart) {
	   $("div#imageContainer img").hide()
	   $("#results").html("The images are now hidden.")
	   
	})
})

// To select all even images

$(function even() {
	$("#even").click(function() {
	   $("div#imageContainer img:odd").addClass("wrappedElement")
	   $("#results").html("Only the even numbered images have been selected.")
		})
})

// To select all odd images
$(function clear() {
	$("#odd").click(function() {
			$("div#imageContainer img:even").addClass("wrappedElement")
	   		$("#results").html("Only the odd numbered images have been selected.")
	})
})

// To move the last image in front of the first image
$(function right() {
	$("#right").click(function() {
	   $("div#imageContainer img:last").addClass("wrappedElement")
	   $("div#imageContainer").prepend( $("div#imageContainer img:last") )
	   $("#results").html("You moved the last image to the front.")
	   
	})
})

// To move the first image behind the last image
$(function left() {
	$("#left").click(function() {
	   $("div#imageContainer img:first").addClass("wrappedElement");
	   $("div#imageContainer").append( $("div#imageContainer img:first") );
	   $("#results").html("You moved the first image to the back.");
	   
	})
})
// To refresh the page
$(function() {
	$("#clear").click(function() {
	   location.reload();	   
	})
})