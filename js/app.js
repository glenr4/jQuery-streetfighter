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
		$(".ryu-ready").hide();
		$(".ryu-throwing").show();
		$(".hadouken").show();
	});

	// Finish Hadouken
	$(".ryu").mouseup(function(){
		$(".ryu-ready").show();
		$(".ryu-throwing").hide();
	});
});