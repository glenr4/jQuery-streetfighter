$(document).ready(function(){
	// Animate Ryu
	$(".ryu").mouseenter(function(){
		$(".ryu-still").hide();
		$(".ryu-ready").show();
	});

	// Be still Ryu
	$(".ryu").mouseleave(function(){
		$(".ryu-still").show();
		$(".ryu-ready").hide();
	});

	// Hadouken
	$(".ryu").mousedown(function(){
		playHadouken();
		$(".ryu-ready").hide();
		$(".ryu-throwing").show();
		// Animate to right extent of main
		$(".hadouken").finish().show().animate(
			{"left":"1020px"},
			500,
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

function playHadouken () {
	$('#hadouken-sound')[0].volume = 0.5;
	$('#hadouken-sound')[0].load();
	$('#hadouken-sound')[0].play();
}