require.config({
	baseUrl : 'js'
	, paths : {
		'app' : 'app'
		, 'hb' : 'hb'
		, 'jquery'         : 'lib/jquery'
		, 'underscore'     : 'lib/underscore'
		, 'propertyParser' : 'plugin/propertyParser'
		, 'font'           : 'plugin/font'
		, 'hbs'            : 'plugin/hbs'
	}
	, shim : {
		'jquery': {
			'exports' : '$'
		}
		, 'underscore': {
			'exports' : '_'
		}
	}
	, hbs: {
		'disableI18n'      : true
		, 'disableHelpers' : true
	}
});

define([
	'propertyParser'
	, 'font!typekit,id:czt2jur'
	, 'underscore'
	, 'jquery'
	, 'main'
	, 'github-widget'
	, 'lastfm-widget'
]);
