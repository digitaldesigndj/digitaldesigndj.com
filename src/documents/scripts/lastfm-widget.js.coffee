$ ->
	username         = "DigitalDesignDj"
	interval_seconds = 10
	widget           = $(".lastfm").hide()
	loaded           = false
	setInterval (->
		salt = new Date().getTime()
		if widget.length
			# http://stackoverflow.com/questions/226663/parse-rss-with-jquery
			parseRSS = ( url, callback ) ->
				$.ajax
					url: document.location.protocol + "//ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=10&callback=?&q=" + encodeURIComponent( url )
					dataType: "json"
					success: (data) ->
						if data.responseData
							callback data.responseData.feed
							# console.log( data );
						else
							console.log data

			template = Handlebars.templates["lastfm-widget-template"]
			parseRSS "http://ws.audioscrobbler.com/2.0/user/" + encodeURIComponent( username ) + "/recenttracks.rss?nocache=" + salt, ( data ) ->

				$.each data.entries, ( i, v )->
					data.entries[i].publishedDate = prettyDate( v.publishedDate )

				# console.log( data );
				widget.html template(data)
				unless loaded
					widget_height = widget.css("height", "auto").height()
					widget.height "0px"
					widget.fadeIn "normal", ->
						widget.animate
							height: widget_height + 20
						, 1500

					loaded = true

		widget
	), 1000 * interval_seconds
