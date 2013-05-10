$(function(){
	var username = 'DigitalDesignDj';
	var interval_seconds = 15;
	setInterval(function widget() {
		var salt = new Date().getTime();
		if( $('.lastfm').length !== 0 ) {
			var template = Handlebars.templates['lastfm-widget-template'];
			// http://stackoverflow.com/questions/226663/parse-rss-with-jquery
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
			parseRSS('http://ws.audioscrobbler.com/2.0/user/' + encodeURIComponent( username ) + '/recenttracks.rss?nocache=' + salt , function( data ){
				// console.log( data );
				$('.lastfm').html( template(data) );
			});
		}
		return widget;
	}(), 1000 * interval_seconds );
});