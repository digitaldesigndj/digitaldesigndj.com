//  node r.js -o app.build.js

({
	appDir: "stg/"
	, baseUrl: "js/"
	, dir: "out/"
	// , optimize: "none"  //Comment out to uglify
	, modules: [
		{
			name: "app"
		}
	]
	// paths and shim are mirrored in app.js
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
		, 'socket-io': {
			'exports' : 'io'
		}
	}
})
