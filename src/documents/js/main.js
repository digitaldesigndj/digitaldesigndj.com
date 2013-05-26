define([ 'socket-io', 'lastfm-widget' ], function( io, lastfmWidget ) {
	var socket = io.connect(
		'http://digitaldesigndj.com:8880'
		, { resource: 'api/socket.io' }
	);
	socket.of('/api').on( 'update', function( data ) {
		console.log( data );
		lastfmWidget( data );
	});
	socket.of('/api').on( 'broadcast', function( data ) {
		$('#broadcast').text( data );
	});
});
