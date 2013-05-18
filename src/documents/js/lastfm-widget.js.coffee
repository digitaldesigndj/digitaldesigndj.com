$ ->
	username         = "DigitalDesignDj"
	lastfm_api_key   = 'c7b66efb5c1869ed420b3275da989fab'
	widget           = $(".lastfm")
	lastfm = ->
		if widget.length
			template = Handlebars.templates["lastfm-widget-template"]
			$.ajax
				url: 'http://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=' + encodeURIComponent( username ) + '&api_key=' + encodeURIComponent( lastfm_api_key ) + '&format=json'
				dataType: "json"
				success: (data) ->
					if data
						console.log data
						widget.html template(data)
					else
						console.log data
	do lastfm
