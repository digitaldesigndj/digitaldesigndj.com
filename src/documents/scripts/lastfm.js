$(function(){

	if( $('.lastfm').length !== 0 ) {
			var source   = $("#lastfm-template").html();
			var template = Handlebars.compile(source);

		/* 
		 * http://stackoverflow.com/questions/226663/parse-rss-with-jquery
		 */
		function parseRSS(url, callback) {
			$.ajax({
				url: document.location.protocol + '//ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=10&callback=?&q=' + encodeURIComponent(url),
				dataType: 'json',
				success: function(data) {
					callback(data.responseData.feed);
				}
			});
		}

		parseRSS('http://ws.audioscrobbler.com/2.0/user/DigitalDesignDj/recenttracks.rss', function(data){
			console.log( data );
			$('.lastfm').append( template(data) );
		});


		$('#content').on('click', function(){
			$(this).animate( {'margin-top': '200px'},'3000');
		});

	}

});