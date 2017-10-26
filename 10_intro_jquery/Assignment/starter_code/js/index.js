 $(document).ready(function() {

//Define form event of submit/when the user submits the form//
  $('#submit-btn').click(function(event) {
  	event.preventDefault();

  	//Define the variable input to compare with cities //
  	var inputField = $('#city-type').val();


    //If input var is same as inputField, change  background //
      if(inputField === 'new york city' || inputField === 'nyc' || inputField === 'new york') {
      $('body').removeClass();
      $('body').addClass('nyc');
    }

    // If SF or San Francisco or Bay Area change class to sf
    else if (inputField === 'sf' || inputField === 'san francisco' || inputField === 'bay area') {
      $('body').removeClass();
      $('body').addClass('sf');
    }

    // If Austin or ATX change class to austin
    else if (inputField === 'austin' || inputField === 'atx') {
      $('body').removeClass();
      $('body').addClass('austin');
    }

    // If Los Angeles or LA or LAX change class to la
    else if (inputField === 'los angeles' || inputField === 'la' || inputField === 'lax') {
      $('body').removeClass();
      $('body').addClass('la');
    }

    // If Sydney/SYD change class to sydney
    else if (inputField === 'sydney' || inputField === 'syd') {
      $('body').removeClass();
      $('body').addClass('sydney');
    }

    console.log(inputField);
    
  });
 
});