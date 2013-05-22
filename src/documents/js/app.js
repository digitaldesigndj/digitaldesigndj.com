require.config({
	baseUrl : 'js'
	
	, paths : {
		'app' : 'app'
		, 'hb' : 'hb'
		, 'handlebars'     : 'lib/handlebars_runtime'
		, 'jquery'         : 'lib/jquery'
		, 'underscore'     : 'lib/underscore'
		, 'propertyParser' : 'plugin/propertyParser'
		, 'font'           : 'plugin/font'
	}
	, shim : {
		'jquery': {
			'exports' : '$'
		}
		, 'underscore': {
			'exports' : '_'
		}
		, 'handlebars': {
			'exports' : 'Handlebars'
		}
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
