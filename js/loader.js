$(document).ready(function()
{
	$('#app').hide();
	let screen = $(window).width();
	let $background = $(window).height();
	$('#background-loader').height($background);
	setTimeout(function()
		{
			$('#background-loader').fadeOut();
		}
		,3000);
	setTimeout(function()
		{
			$('#app').fadeIn();
		},3500);
	
});