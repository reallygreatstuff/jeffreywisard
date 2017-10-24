 $(document).ready(function() {

//Define form event of submit//
  $('#submit-btn').click(function(event) {
  	event.preventDefault();

  	//Define the variable input to compare with cities //
  	var inputField = $('#city-type').val();


    //If input var is same as inputField, change  background //
      if(inputField == 'new york city' || 'nyc' || 'new york') {
      $('body').removeClass();
      $('body').addClass('nyc');
    }

    // if SF/San Francisco/Bay Area change the CSS class to 'sf'
    else if (inputField == 'sf' || 'san francisco' || 'bay area') {
      $('body').removeClass();
      $('body').addClass('sf');
    }

    // if Austin/ATX change the CSS class to 'austin'
    else if (inputField == 'austin' || 'atx') {
      $('body').removeClass();
      $('body').addClass('austin');
    }

    // if Los Angeles/LA/LAX change the CSS class to 'la'
    else if (inputField == 'los angeles' || 'la' ||  'lax') {
      $('body').removeClass();
      $('body').addClass('la');
    }

    // if Sydney/SYD change the CSS class to 'sydney'
    else if (inputField == 'sydney' || 'syd') {
      $('body').removeClass();
      $('body').addClass('sydney');
    }

    console.log(inputField);
    
  });
 
});