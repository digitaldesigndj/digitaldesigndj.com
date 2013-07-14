// Configure
require.config({
	'baseUrl': 'js',
	'paths': {
		'app': 'app',
		'hb': 'hb',
		'jquery': 'lib/jquery',
		'underscore': 'lib/underscore',
		'propertyParser': 'plugin/propertyParser',
		'font': 'plugin/font',
		'hbs': 'plugin/hbs'
	},
	'shim': {
		'font': {
			'deps': [
				'propertyParser'
			]
		},
		'jquery': {
			'exports': '$'
		},
		'underscore': {
			'exports': '_'
		},
		'socket-io': {
			'exports': 'io'
		}
	},
	'hbs': {
		'disableI18n': {

		},
		'disableHelpers': {

		}
	}
});

// Drop the puck
define([
	'main'
	// , 'font!typekit,id:czt2jur'
	, 'scroll-page-offscreen'
	, 'github-widgets'
	, 'analytics'
	, 'live-reload'
]);
