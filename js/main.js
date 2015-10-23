$(document).ready(function(e){

	var winH = $(window).height();
	console.log(winH);


	$(window).on('click',function(e){
		//num px scrolled down the browser
		var px = $(window).scrollTop(); 

		$('.hills').css('left', '-850px');

	});


});