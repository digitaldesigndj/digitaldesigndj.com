// Configure
require.config({
	baseUrl: 'js',
	paths: {
		app: 'app',
		cycle: '../bower/cycle/index',
		isotope: '../bower/isotope/index',
		jquery: '../bower/jquery/index',
		knockout: '../bower/knockout/index',
		require: '../bower/require/index',
		underscore: '../bower/underscore/index'
	},
	shim: {
		cycle: {
			deps: ['jquery']
		},
		jquery: {
			exports: '$'
		},
		underscore: {
			exports: '_'
		},
		socketio: {
			exports: 'io'
		},
		knockout: {
			exports: 'ko'
		}
	}
});

// Common Modules, Run Everywhere
define( function( require ) {
	require('common/scroll-page-offscreen');
	require('common/main');
	require('common/live-reload');
});
