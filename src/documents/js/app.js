// Configure
require.config({
	baseUrl: 'js',
	paths: {
		app: 'app',
		cycle: 'bower/cycle/index',
		isotope: 'bower/isotope/index',
		jquery: 'bower/jquery/index',
		knockout: 'bower/knockout/index',
		require: 'bower/require/index',
		underscore: 'bower/underscore/index'
	},
	shim: {
		font: {
			deps: [
				'propertyParser'
			]
		},
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
	hbs: {
		disableI18n: {

		},
		disableHelpers: {

		}
	}
});

// Drop the puck
define([
	'main',
	'koexample',
	// 'font!typekit,id:czt2jur',
	'scroll-page-offscreen' //,
	// 'live-reload'
]);
