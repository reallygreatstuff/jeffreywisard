$(document).ready(function() {

 
$("input[type='radio']").click(function(event) {
console.log("I'm clickin");
var boxA = $("input[name='playerA']:checked").val();
console.log(boxA);

var boxB = $("input[name='playerB']:checked").val();
console.log(boxB);

var total = Number(boxA) + Number(boxB);
console.log(total);

var playerA = 0;
var playerB = 0;

if (total === 2 || total === 4){
	$('#winner').html("Player B Wins");
	var scoreB =0;
	console.log(scoreB);
	$('#playerBScore').html(scoreB + 1);
	$('.player').removeAttr('checked');
}

else if (total === 3){
	$('#winner').html("Player A Wins");
	var scoreA = 0;
	$('#playerAScore').html(scoreA + 1);

}
})

});