$(function(){
	var username = 'DigitalDesignDj';
	var interval_seconds = 5;
	var widget = $('.lastfm');
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
							if ( !loaded ) {
								widget.addClass( 'widget' );
								loaded = true;
							}
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
			});
		}
		return widget;
	}, 1000 * interval_seconds );
	
});