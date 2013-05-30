// Configure
require.config({
	baseUrl : 'js'
	, paths : {
		'app' : 'app'
		, 'hb' : 'hb'
		, 'jquery'                : 'lib/jquery'
		, 'underscore'            : 'lib/underscore'
		, 'propertyParser'        : 'plugin/propertyParser'
		, 'font'                  : 'plugin/font'
		// , 'hbs'                   : 'plugin/hbs'
		// , 'main'                  : 'main'
		// , 'scroll-page-offscreen' : 'scroll-page-offscreen'
		// , 'github-widgets'        : 'github-widgets'
		// , 'live-reload'           : 'live-reload'
		// , 'json-widget'           : 'json-widget'
		// , 'socket-io'             : 'socket-io'
		// , 'lastfm-widget'         : 'lastfm-widget'
		// , 'hbs!hb/github-com'     : 'hbs!hb/github-com'
		// , 'hbs!hb/github-api'     : 'hbs!hb/github-api'
		// , 'hbs!hb/lastfm-recent'  : 'hbs!hb/lastfm-recent'
		// , 'hbs!hb/lastfm-current' : 'hbs!hb/lastfm-current'
	}
	, shim : {
		'font' : {
			deps: [ 'propertyParser' ]
		}
		, 'jquery': {
			'exports' : '$'
		}
		, 'underscore': {
			'exports' : '_'
		}
		, 'socket-io': {
			'exports' : 'io'
		}
		// , 'hbs' : {
		// 	deps : [ 'Handlebars', 'hbs/underscore', 'hbs/i18nprecompile', 'hbs/json2' ]
		// }
		// , 'main' : {
		// 	deps: [ 'jquery', 'socket-io', 'lastfm-widget' ]
		// }
		// , 'scroll-page-offscreen' : {
		// 	deps: [ 'jquery' ]
		// }
		// , 'github-widget' : {
		// 	deps: [ 'hbs', 'json-widget', 'hbs!hb/github-com', 'hbs!hb/github-api' ]
		// }
		// , 'json-widget' : {
		// 	deps: [ 'underscore', 'jquery' ]
		// }
		// , 'lastfm-widget' : {
		// 	deps: [ 'hbs', 'jquery', 'hbs!hb/lastfm-recent', 'hbs!hb/lastfm-current' ]
		// }
	}
	, hbs: {
		'disableI18n'      : true
		, 'disableHelpers' : true
	}
});

// Drop the puck
define([
	//'font!typekit,id:czt2jur'
	//, 'main'
	'main'
	, 'scroll-page-offscreen'
	//, 'github-widgets'
	, 'live-reload'
]);
