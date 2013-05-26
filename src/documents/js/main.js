define([ 'socket-io', 'lastfm-widget' ], function( io, lastfmWidget ) {
	var socket = io.connect(
		'http://digitaldesigndj.com:8880'
		, { resource: 'api/socket.io' }
	);
	socket.of('/api').on( 'update', function( data ) {
		lastfmWidget( data );
	});
});
