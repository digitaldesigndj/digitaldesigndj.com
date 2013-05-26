define(['jquery', 'socket-io', 'hbs!hb/lastfm-recent', 'hbs!hb/lastfm-current'], function($, io, tmplRecent, tmplCurrent) {
	function widget() {
		var widgets = $( '.lastfm' )
			, socket  = io.connect(
				'http://digitaldesigndj.com:8880'
				, { resource: 'api/socket.io' }
			);
		$.each(widgets, function( i, v ) {
			var template, widget;
			widget = $( v );
			if ( widget.length ) {
				if ( widget.hasClass( 'current' ) ) {
					template = tmplCurrent;
				} else {
					template = tmplRecent;
				}
				socket.of('/api').on( 'update', function( data ) {
					console.log( data );
					widget
						.html( template( data ) )
						.addClass( 'widget' );
				});
			}
		});
	};
	widget();
});
