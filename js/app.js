$(document).ready(function(){
	// Store Ryu state
	var ryuPose = "still";

	// Ryu ready pose
	$(".ryu").mouseenter(function(){
		$(".ryu-still").hide();
		$(".ryu-ready").show();
		$(".ryu-cool").hide();
		// Update state
		ryuPose = "ready";
	});

	// Ryu still pose
	$(".ryu").mouseleave(function(){
		$(".ryu-still").show();
		$(".ryu-ready").hide();
		$(".ryu-cool").hide();
		// Update state
		ryuPose = "still";
	});

	// Ryu cool pose
	$(document).keydown(function(event){
		if(event.keyCode === 88){
			$(".ryu-still").hide();
			$(".ryu-ready").hide();
			$(".ryu-cool").show();
		}
	});

	// Ryu revert cool pose
	$(document).keyup(function(event){
		if(event.keyCode === 88){
			if(ryuPose ==="ready"){
				$(".ryu-still").hide();
				$(".ryu-ready").show();
				$(".ryu-cool").hide();				
			} else {
				$(".ryu-still").show();
				$(".ryu-ready").hide();
				$(".ryu-cool").hide();
			};
		};
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