$(document).ready(function(e){

	var winH = $(window).height();
	var winW = $(window).width();
	console.log(winH, winW);

	var remainingW = $('.hills').width() - winH;

	$('img').after('<div></div>');

	$('div').css('height', remainingW)

	$(window).on('scroll',function(e){
		//num px scrolled down the browser
		var px = $(window).scrollTop(); 


		$('.hills').css('left', '-' + px );

	});


});