 $(document).ready(function() {

  $('form').submit(function(event) {
  	var inputField = $('input').val();
    if (inputField === 'NYC' || 'new york' || 'nyc' || 'new york city') {
    	$('body').css('background-image', "url('images/nyc.jpg')");

    }
    
    else if (inputField === 'San Francisco' || 'SF' || 'Bay Area' || 'sf') {
    	$('body').css('background-image', "url('images/sf.jpg')");
    
    }

    else if (inputField === 'Los Angeles' || 'LA' || 'la' || 'LAX') {
    	$('body').css('background-image', "url('images/la.jpg')");
    
    }
 	
 	else if (inputField === 'Austin' || 'ATX' || 'atx') {
    	$('body').css('background-image', "url('images/austin.jpg')");
    
    }

    else if (inputField === 'Sydney' || 'SYD' || 'sy') {
    	$('body').css('background-image', "url('images/sydney.jpg')");
    
    }

    console.log(inputField);
    event.preventDefault();
  });
 
});