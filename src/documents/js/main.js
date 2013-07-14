define([ 'jquery', 'underscore' ], function( $, _ ) {
	// Animate In
	$('.outer').animate({'opacity':'1'}, 250);
	// Animate Out
	$("a").on("click", function(){
		var href = $(this).attr("href");
		var animDuration = 250;
		$('.outer').animate({'opacity':'0'}, animDuration);
		setTimeout(function () {
			window.location = href;
		}, animDuration);
		return false;
	});
});
