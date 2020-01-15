$(document).ready(function()
{
	$('.svg-wrapper-left-login').addClass('animated jackInTheBox');
	$('.svg-wrapper-right-login').addClass('animated jackInTheBox');
	$(window).on('scroll', function ()
	{
		if($(window).scrollTop() > $('footer').offset().top - 500)
		{
			$('#lines-footer').css('opacity','1');
			$('footer').css('opacity','1');
			$('footer').addClass('animated bounceInUp');
			$('#lines-footer').addClass('animated swing');
			$('#svg-wrapper-footer').addClass('animated jackInTheBox delay-1s');
		}
	});
});