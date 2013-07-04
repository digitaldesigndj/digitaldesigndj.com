define([ 'jquery', 'hbs!hb/lastfm-recent', 'hbs!hb/lastfm-current' ]
	, function( $, tmplRecent, tmplCurrent ) {
		return function widget( data ) {
			console.log( data );
			// $.each( $( '.lastfm' ) , function( i, v ) {
			// 	var widget = $( v );
			// 	if ( widget.length ) {
			// 		if( widget.hasClass( 'current' ) ) {
			// 			if( data.recenttracks.track.length === 11 ) {
			// 				widget
			// 					.html( tmplCurrent( data ) )
			// 					.addClass( 'widget' );
			// 			}
			// 		} else {
			// 			widget
			// 				.html( tmplRecent( data ) )
			// 				.addClass( 'widget' );
			// 		}
			// 	}
			// });
		};
	}
);
