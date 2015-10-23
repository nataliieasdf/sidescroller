$(document).ready(function(e){

	var winH = $(window).height();
	var winW = $(window).width();
	console.log(winH, winW);

	var remainingW = $('.hills').width() - winW;

	//$('img').after('<div></div>');

	$('body').css('height', remainingW+winH)

	$(window).on('scroll',function(e){
		//num px scrolled down the browser
		var px = $(window).scrollTop(); 
		console.log(px);
		var move = 0 - px

		$('.hills').css('left', (move) );

	});

});  