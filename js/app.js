$(document).ready(function(){
	// Ryu ready pose
	$(".ryu").mouseenter(function(){
		$(".ryu-still").hide();
		$(".ryu-ready").show();
		$(".ryu-cool").hide();
	});

	// Ryu still pose
	$(".ryu").mouseleave(function(){
		$(".ryu-still").show();
		$(".ryu-ready").hide();
		$(".ryu-cool").hide();
	});

	// Ryu cool pose
	$(document).keydown(function(event){
		if(event.which == 88){
			$(".ryu-still").hide();
			$(".ryu-ready").hide();
			$(".ryu-cool").show();
		}
	});

	// Throw Hadouken
	$(".ryu").mousedown(function(){
		// Play Hadouken sound and change to throwing image
		playHadouken();
		$(".ryu-ready").hide();
		$(".ryu-throwing").show();
		// Animate hadouken to right extent of main div
		$(".hadouken").finish().show().animate(
			{"left":"1020px"},
			500,
			// Hide hadouken image and reset position
			function () {
				$(this).hide();
				$(this).css("left","520px");
			});
	});

	// Finish Hadouken
	$(".ryu").mouseup(function(){
		$(".ryu-ready").show();
		$(".ryu-throwing").hide();
	});
});

// Hadouken sound
function playHadouken () {
	$('#hadouken-sound')[0].volume = 0.5;
	$('#hadouken-sound')[0].load();
	$('#hadouken-sound')[0].play();
}