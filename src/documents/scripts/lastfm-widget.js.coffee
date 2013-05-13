$ ->
	username         = "DigitalDesignDj"
	interval_seconds = 10
	widget           = $(".lastfm").hide()
	loaded           = false
	lastfm_api_key   = 'c7b66efb5c1869ed420b3275da989fab'
	# setInterval (->
	salt = new Date().getTime()
	if widget.length
		console.log 'antyhring'
		template = Handlebars.templates["lastfm-widget-template"]
		$.ajax
			url: 'http://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=' + encodeURIComponent( username ) + '&api_key=' + encodeURIComponent( lastfm_api_key ) + '&format=json'
			dataType: "json"
			success: (data) ->
				if data
					console.log data
					widget.html template(data)
					unless loaded
						widget_height = widget.css("height", "auto").height()
						widget.height "0px"
						widget.fadeIn "normal", ->
							widget.animate
								height: widget_height + 20
							, 1500

						loaded = true
				else
					console.log data
	# ), 1000 * interval_seconds
