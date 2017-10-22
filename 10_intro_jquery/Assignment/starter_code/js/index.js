 $(document).ready(function() {


var ny = 'ny' || 'new york' || 'nyc';
var inputField = $('input').val();
 

  $('form').submit(function(event) {
        if (inputField = ny) {
        	$('body').attr('src', '../images/nyc.jpg');
        }

        console.log(inputField);
        event.preventDefault();
      });
    
    });