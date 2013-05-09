$(function(){
	if( $('.lastfm').length !== 0 ) {
		var template = Handlebars.templates['lastfm-widget-template'];
		var salt = new Date().getTime();
		// http://stackoverflow.com/questions/226663/parse-rss-with-jquery
		function parseRSS(url, callback) {
			$.ajax({
				url: document.location.protocol + '//ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=10&callback=?&q=' + encodeURIComponent(url)
				, dataType: 'json'
				, cache: false
				, success: function(data) {
					callback(data.responseData.feed);
				}
			});
		}
		parseRSS('http://ws.audioscrobbler.com/2.0/user/DigitalDesignDj/recenttracks.rss?nocache='+salt, function(data){
			// console.log( data );
			$('.lastfm').append( template(data) );
		});
	}
});