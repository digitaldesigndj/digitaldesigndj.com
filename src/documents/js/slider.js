require.config({
	baseUrl: 'js',
	paths: {
		cycle: '../bower/cycle/index'
	},
	shim: {
		cycle: {
			deps: ['../bower/jquery/index']
		}
	}
});
define( function( require ) {
	return function() {
		require('cycle');
		$( '.cycle-slideshow' ).on( 'cycle-before', function(e, optionHash, outgoingSlideEl, incomingSlideEl, forwardFlag ) {
			console.log(e, outgoingSlideEl);
		});
	}
});
