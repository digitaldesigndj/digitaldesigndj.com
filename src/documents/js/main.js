define( function( require ) {
	var $ = require('jquery'),
		_ = require('underscore');
	$('.no-js').removeClass('no-js');
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
	window.GoogleAnalyticsObject = 'ga';
	window.ga = { q: [['create', 'UA-18710277-1', 'jspm.io'], ['send', 'pageview']], l: Date.now() };
	require(['http://www.google-analytics.com/analytics.js']);
});
