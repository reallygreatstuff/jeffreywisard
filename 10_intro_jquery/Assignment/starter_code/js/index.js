 $(document).ready(function() {




  $('form').submit(function(event) {
  	var inputField = $('input').val();
        if (inputField == 'ny') {
        	$('body').attr('src', '../images/nyc.jpg');
        }

        console.log(inputField);
        event.preventDefault();
      });
    
    });