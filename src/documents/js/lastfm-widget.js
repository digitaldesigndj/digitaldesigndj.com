define(['jquery', 'socket-io', 'hbs!hb/lastfm-recent', 'hbs!hb/lastfm-current'], function($, io, tmplRecent, tmplCurrent) {
	return function widget() {
		var socket = io.connect(
				'http://digitaldesigndj.com:8880'
				, { resource: 'api/socket.io' }
			);
		socket.of('/api').on( 'update', function( data ) {
			console.log( data );
			$.each( $( '.lastfm' ) , function( i, v ) {
				var widget = $( v );
				if ( widget.length ) {
					if ( widget.hasClass( 'current' ) ) {
						if( data.recenttracks.track.length === 11 ) {
							widget
								.html( tmplCurrent( data ) )
								.addClass( 'widget' );
						}
					} else {
						widget
							.html( tmplRecent( data ) )
							.addClass( 'widget' );
					}
				}
			});
		});
	};
});
