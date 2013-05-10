$(function(){
	var username = 'DigitalDesignDj';
	var interval_seconds = 10;
	var widget = $('.lastfm').hide();
	var loaded = false;
	setInterval( function() {
		var salt = new Date().getTime();
		if( widget.length ) {
			var template = Handlebars.templates['lastfm-widget-template'];
			// http://stackoverflow.com/questions/226663/parse-rss-with-jquery
			function parseRSS( url, callback ) {
				$.ajax({
					url: document.location.protocol + '//ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=10&callback=?&q=' + encodeURIComponent( url )
					, dataType: 'json'
					, success: function( data ) {
						if( data.responseData ) {
							callback(data.responseData.feed);
							// console.log( data );
						}else{
							console.log( data );
						}
					}
				});
			}
			parseRSS('http://ws.audioscrobbler.com/2.0/user/' + encodeURIComponent( username ) + '/recenttracks.rss?nocache=' + salt , function( data ){
				// console.log( data );
				widget.html( template(data) );
				if ( !loaded ) {
					var the_height = widget.css('height', 'auto').height();
					widget.height('0px');
					widget.fadeIn('normal', function() {
						widget.animate({height: the_height + 20}, 1500);
					});
					loaded = true;
				}
			});
		}
		return widget;
	}, 1000 * interval_seconds );
});