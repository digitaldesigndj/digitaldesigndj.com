//  node r.js -o app.build.js

({
	appDir: "stg/"
	, baseUrl: "js/"
	, dir: "out/"
	//Comment out the optimize line if you want
	//the code minified by UglifyJS
	// , optimize: "none"

	, paths : {
		'app' : 'app'
		, 'hb' : 'hb'
		, 'handlebars'     : 'lib/handlebars_runtime'
		, 'jquery'         : 'lib/jquery'
		, 'underscore'     : 'lib/underscore'
		, 'propertyParser' : 'plugin/propertyParser'
		, 'font'           : 'plugin/font'
	}

	, modules: [
		//Optimize the application files. jQuery is not 
		//included since it is already in require-jquery.js
		{
			name: "app"
		}
	]
})
