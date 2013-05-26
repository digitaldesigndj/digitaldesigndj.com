define(['jquery', 'socket-io', 'hbs!hb/lastfm-recent', 'hbs!hb/lastfm-current'], function($, io, tmplRecent, tmplCurrent) {
	return function widget() {
		var socket = io.connect(
				'http://digitaldesigndj.com:8880'
				, { resource: 'api/socket.io' }
			);
		socket.of('/api').on( 'update', function( data ) {
			console.log( data );
			$.each( $( '.lastfm' ) , function( i, v ) {
				var template
					, widget = $( v );
				if ( widget.length ) {
					if ( widget.hasClass( 'current' ) ) {
						template = tmplCurrent;
					} else {
						template = tmplRecent;
					}
					widget
						.html( template( data ) )
						.addClass( 'widget' );
				}
			});
		});
	};
});
