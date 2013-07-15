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
	require('common');
	require('cycle');
});
