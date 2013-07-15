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
		underscore: '../bower/underscore/index',
		'socket-io': '../bower/socket-io/index'
	},
	shim: {
		jquery: {
			exports: '$'
		},
		underscore: {
			exports: '_'
		},
		'socket-io': {
			exports: 'io'
		},
		knockout: {
			exports: 'ko'
		}
	},
});

// Drop the puck
define([
	'main',
	'koexample',
	'scroll-page-offscreen',
	'live-reload'
]);
