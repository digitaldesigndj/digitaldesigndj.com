// Configure
require.config({
	baseUrl: 'js',
	paths: {
		main: 'lib/main',
		socketio: 'lib/socketio',
		'live-reload': 'lib/live-reload',
		'scroll-page-offscreen': 'lib/scroll-page-offscreen',
		cycle: '../bower/cycle/index',
		jquery: '../bower/jquery/index',
		knockout: '../bower/knockout/index',
		require: '../bower/require/index',
		underscore: '../bower/underscore/index'
	},
	shim: {
		cycle: {
			deps: [
				'jquery'
			]
		},
		'scroll-page-offscreen': {
			deps: [
				'jquery'
			]
		},
		main: {
			deps: [
				'jquery'
			]
		}
	}
});

define( function( require ) {
	require('scroll-page-offscreen');
	// require('live-reload');
	require('main');
});
