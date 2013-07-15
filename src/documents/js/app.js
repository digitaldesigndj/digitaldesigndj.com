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
		jquery: {
			exports: '$'
		},
		cycle: {
			deps: ['jquery']
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

// Drop the puck
define([
	'main',
	'koexample',
	'scroll-page-offscreen',
	'live-reload',
	'cycle'
]);
