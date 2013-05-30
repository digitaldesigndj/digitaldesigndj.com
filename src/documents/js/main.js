define([ 'jquery', 'socket-io', 'lastfm-widget' ], function( $, io, lastfmWidget ) {
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
	// Animate In
	$('.outer').animate({'opacity':'1'}, 250);
	// Animate Out
	$("a").on("click", function(){
		var href = $(this).attr("href");
		var animDuration = 250;
		$('.outer').animate({'opacity':'0'}, animDuration);
		setTimeout(function () {
			window.location = href;
		}, animDuration);
		return false;
	});
});
