$(document).ready(function()
{
	$('.list-group-item').click(function()
	{
		$('.list-group-item.active').removeClass('active');
		$(this).addClass('active');
	});
	var step1 = false;
	var step2 = false;
	var step3 = false;
	var step4 = false;
	var step5 = false;
	var step6= false;
	$('#step-1').click(function()
	{
		if (!step1)
		{
			$('#step-1-extract-2').css('display','block');
			step1 = true;
		}
		else 
		{
			$('#step-1-extract-2').css('display','none');
			step1 = false;
		}
	});
	$('#step-2').click(function()
	{
		if (!step2)
		{
			$('#step-2-extract-2').css('display','block');
			step2 = true;
		}
		else 
		{
			$('#step-2-extract-2').css('display','none');
			step2 = false;
		}
	});
	$('#step-3').click(function()
	{
		if (!step3)
		{
			$('#step-3-extract-2').css('display','block');
			step3 = true;
		}
		else 
		{
			$('#step-3-extract-2').css('display','none');
			step3 = false;
		}
	});
	$('#step-4').click(function()
	{
		if (!step4)
		{
			$('#step-4-extract-2').css('display','block');
			step4 = true;
		}
		else 
		{
			$('#step-4-extract-2').css('display','none');
			step4 = false;
		}
	});
	$('#step-5').click(function()
	{
		if (!step5)
		{
			$('#step-5-extract-2').css('display','block');
			step5 = true;
		}
		else 
		{
			$('#step-5-extract-2').css('display','none');
			step5 = false;
		}
	});
	$('#step-6').click(function()
	{
		if (!step6)
		{
			$('#step-6-extract-2').css('display','block');
			step6 = true;
		}
		else 
		{
			$('#step-6-extract-2').css('display','none');
			step6 = false;
		}
	});
	$('.svg-wrapper-left').addClass('animated jackInTheBox');
	$('.svg-wrapper-right').addClass('animated jackInTheBox');
	if($(window).width() >= 992 )
	{

		$('#inicio').hover(function()
		{
			$('#hover-link-inicio').animate({
	    		width: "100%"
	  		}, 200, function() {
	    		
	  		});
		},
		function()
		{
			$( "#hover-link-inicio" ).animate({
	    		width: "0px"
	  		}, 200, function() {
	  		});
		});
		$('#caracteristicas').hover(function()
		{
			$('#hover-link-caracteristicas').animate({
	    		width: "100%"
	  		}, 200, function() {
	    		
	  		});
		},
		function()
		{
			$( "#hover-link-caracteristicas" ).animate({
	    		width: "0px"
	  		}, 200, function() {
	  		});
		});
		$('#invitacion').hover(function()
		{
			$('#hover-link-invitacion').animate({
	    		width: "100%"
	  		}, 200, function() {
	    		
	  		});
		},
		function()
		{
			$( "#hover-link-invitacion" ).animate({
	    		width: "0px"
	  		}, 200, function() {
	  		});
		});
		$('#faqs').hover(function()
		{
			$('#hover-link-faqs').animate({
	    		width: "100%"
	  		}, 200, function() {
	    		
	  		});
		},
		function()
		{
			$( "#hover-link-faqs" ).animate({
	    		width: "0px"
	  		}, 200, function() {
	  		});
		});
		$('#login').hover(function()
		{
			$('#hover-link-login').animate({
	    		width: "100%"
	  		}, 200, function() {
	    		
	  		});
		},
		function()
		{
			$( "#hover-link-login" ).animate({
	    		width: "0px"
	  		}, 200, function() {
	  		});
		});
	}
	var activeToggler = 0;
	$('.navbar-toggler').click(function()
	{
		$(this).addClass('animated shake');
		if (activeToggler == 0)
		{
			$('#bars').css('display','none');
			$('#close').css('display','block');
			$('#content').css('display','none');
			activeToggler = 1;
		}
		else
		{
			$('#bars').css('display','block');
			$('#close').css('display','none');
			$('#content').css('display','block')
			activeToggler = 0;
		}
	});
	let quanty = $('#quanty').text()
	let $childrenCounter = $('#counter').children();
	n = $childrenCounter.length;
	i = 0;
	number = [''];
	quanty.split('').forEach(digito => 
		{
			i++;
			if( i == 1)
			{
				let w = 0;
				onedigit = setInterval(() =>
					{
						w++;
						if (digito == w)
						{
						clearInterval(onedigit);
						}
						$('#one-digit').html(w);	
					
					},150)
			}
			if(i == 2)
			{
				let w = 0;
				twodigit = setInterval(() => 
				{
					w++;
					if (digito == w)
					{
						clearInterval(twodigit);
					}
					$('#two-digit').html(w);
				},150)
			}
			if(i == 3)
			{
				let w = 0;
				threedigit = setInterval(() => 
				{
					w++;
					if (digito == w)
					{
						clearInterval(threedigit);
					}
					$('#three-digit').html(w);
				},150)
			}
			if(i == 4)
			{
				let w = 0;
				fourdigit = setInterval(() => 
				{
					w++;
					if (digito == w)
					{
						clearInterval(fourdigit);
					}
					$('#four-digit').html(w);
				},150)
			}
			if(i == 5)
			{
				let w = 0;
				fivedigit = setInterval(() => 
				{
					w++;
					if (digito == w)
					{
						clearInterval(fivedigit);
					}
					$('#five-digit').html(w);
				},150)
			}
		});
	var alturaPromotion = $('#promotion').offset().top;
	if ($('#promotion')){
	$(window).on('scroll', function ()
	{
		if($(window).scrollTop() > alturaPromotion + 100)
		{
			$('#promotion').css('display','block');
			$('#title-promotion').addClass('animated flash')
			$('.promotion-image').addClass('animated pulse infinite');
			$('.text-information').addClass('animated tada delay-1s');
			$('#svg-wrapper-left-what').addClass('animated jackInTheBox delay-1s');	
			$('#svg-wrapper-right-what').addClass('animated jackInTheBox delay-1s');	
		}
	});
}
	if($('#what'))
	{
	$(window).on('scroll', function ()
	{
		if($(window).scrollTop() > $('#what').offset().top - 500)
		{
			$('#lines-what').css('opacity','1');
			$('#what').css('opacity','1');
			$('#what-title').addClass('animated flash');
			$('.what-text').addClass('animated bounceInUp');
			$('#lines-what').addClass('animated swing');
		}
	});
}
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
	if($('#steps'))
	{
	$(window).on('scroll', function ()
	{
		if($(window).scrollTop() > $('#steps').offset().top - 500)
		{
			$('#lines-steps').css('opacity','1');
			$('#steps').css('opacity','1');
			$('#steps-title').addClass('animated infinite jello')
			$('#steps').addClass('animated bounceInUp');
			$('#lines-steps').addClass('animated swing');
			$('.number-step').addClass('animated pulse infinite')
		}
	});
	}	
	$('#registrarme-button').hover(function()
		{
			$(this).addClass('animated infinite jello');
		},function()
		{
			$(this).removeClass('animated infinite jello');
		});
	$('#main-faqs').addClass('animated swing')
	$('#welcome #logotipo').addClass("animated infinite pulse");
	$('#welcome #title-welcome').addClass("animated pulse");
	$('#welcome #p-welcome-1').addClass("animated flash");
	$('#welcome #p-welcome-2').addClass("animated flash");
	$('#welcome #counter').addClass("animated infinite pulse");
	$('#container-video').addClass('animated swing');
	
	
});