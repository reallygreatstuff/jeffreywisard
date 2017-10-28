$(document).ready(function() {

//Created an array with all the lovely cities I want call
var cityType = [
"NYC",
"SF",
"LA",
"ATX",
"SYD",
];

//Use array and create a drop down list to select
$(cityType).each(function(i, item) {
	//console.log(item);
	$('#city-type').append("<option>"+item+"</option>")
});

//When city type is changed/selected, create the variable for input and run the script
  	 $("#city-type").change(function () {
  	var inputField = $("option:selected").val();
  	console.log(inputField);


    //If input var is same as inputField, change  background //
      if(inputField === 'new york city' || inputField === 'NYC' || inputField === 'new york') {
      $('body').removeClass();
      $('body').addClass('nyc');
    }

    // If SF or San Francisco or Bay Area change class to sf
    else if (inputField === 'SF' || inputField === 'san francisco' || inputField === 'bay area') {
      $('body').removeClass();
      $('body').addClass('sf');
    }

    // If Austin or ATX change class to austin
    else if (inputField === 'austin' || inputField === 'ATX') {
      $('body').removeClass();
      $('body').addClass('austin');
    }

    // If Los Angeles or LA or LAX change class to la
    else if (inputField === 'los angeles' || inputField === 'la' || inputField === 'lax' || inputField === 'LA') {
      $('body').removeClass();
      $('body').addClass('la');
    }

    // If Sydney/SYD change class to sydney
    else if (inputField === 'sydney' || inputField === 'SYD') {
      $('body').removeClass();
      $('body').addClass('sydney');
    }
    });

  });