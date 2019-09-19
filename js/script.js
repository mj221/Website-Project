
$(document).ready(function() {
	
	// Adding a "JavaScript is Enabled" Body Class

	$("body").addClass("js");

	// Features Expand
	var person = prompt("Hello friend,  What is your name?", "Charlie");
	var person1= " "
	person1 += person
	document.getElementById("user").innerHTML=person1;
	$("#features article .expand-button a").click(function(event) {
		$(this).parent().parent().addClass("expand");
		event.preventDefault();
	});

	

	
});