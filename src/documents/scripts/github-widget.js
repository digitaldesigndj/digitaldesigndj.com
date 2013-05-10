/*
 * JavaScript Pretty Date
 * Copyright (c) 2011 John Resig (ejohn.org)
 * Licensed under the MIT and GPL licenses.
 */

// Takes an ISO time and returns a string representing how
// long ago the date represents.
function prettyDate(time){
	var date = new Date((time || "").replace(/-/g,"/").replace(/[TZ]/g," ")),
		diff = ( ( ( new Date() ).getTime() - date.getTime() ) / 1000 ) - 7200,
		day_diff = Math.floor(diff / 86400);
			
	if ( isNaN(day_diff) || day_diff < 0 || day_diff >= 31 )
		return;
			
	return day_diff == 0 && (
			diff < 60 && "just now" ||
			diff < 120 && "1 minute ago" ||
			diff < 3600 && Math.floor( diff / 60 ) + " minutes ago" ||
			diff < 7200 && "1 hour ago" ||
			diff < 86400 && Math.floor( diff / 3600 ) + " hours ago") ||
		day_diff == 1 && "Yesterday" ||
		day_diff < 7 && day_diff + " days ago" ||
		day_diff < 31 && Math.ceil( day_diff / 7 ) + " weeks ago";
}

/*
 * Github Widget
 */
$(function(){
	var username = 'DigitalDesignDj';
	var reponame = 'digitaldesigndj.com';
	var interval_seconds = 10;
	// http://stackoverflow.com/questions/226663/parse-rss-with-jquer
	// Uses Google Feeds API
	$('.github-commits').hide();
	function parseRSS( url, callback ) {
		$.ajax({
			url: document.location.protocol + '//ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=10&callback=?&q=' + encodeURIComponent( url )
			, dataType: 'json'
			, success: function( data ) {
				if( data.responseData ) {
					callback(data.responseData.feed);
				}else{
					console.log( data );
				}
			}
		});
	}
	setInterval(function widget() {
		var widget = $('.github-commits');
		var salt = new Date().getTime();
		if( widget.length ) {
			var template = Handlebars.templates['github-widget-template'];
			parseRSS('https://github.com/' + encodeURIComponent( username ) + '/' + encodeURIComponent( reponame ) + '/commits/master.atom?nocache=' + salt , function( data ){
				// console.log( data );
				// Replace ISO Date Time with PrettyDates
				$.each( data.entries, function( i, v ){
					data.entries[i].publishedDate = prettyDate( v.publishedDate.replace( ' -0700', ' -0500' ) );
				});
				widget.html( template(data) );
				var the_height = widget.css('height', 'auto').height();
				widget.height('0px');
				widget.fadeIn('normal', function() {
					widget.animate({height: the_height + 20}, 1500);
				});
			});
		}
		return widget;
	}(), 1000 * interval_seconds );
});
