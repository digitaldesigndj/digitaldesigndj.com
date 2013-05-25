define ['jquery', 'socket-io', 'hbs!hb/lastfm-recent', 'hbs!hb/lastfm-current'], ($, io, tmplRecent, tmplCurrent) ->
	username         = 'DigitalDesignDj'
	lastfm_api_key   = 'c7b66efb5c1869ed420b3275da989fab'
	widgets          = $('.lastfm')
	socket           = io.connect 'http://digitaldesigndj.com/', {resource:'api/socket.io'}
	lastfm = ->
		$.each widgets, ( i, v ) ->
			widget = $ v
			if widget.length
				if widget.hasClass 'current'
					template = tmplCurrent
				else
					template = tmplRecent
				socket.of('/api').on 'update', ( data ) ->
					console.log data
					widget.html template( data )
	do lastfm
