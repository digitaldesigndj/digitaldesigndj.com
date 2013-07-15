//  node r.js -o app.build.js

({
	appDir: "stg/",
	 baseUrl: "js/",
	 dir: "out/",
	//  optimize: "none"  //Comment out to uglify,
	preserveLicenseComments: false,
	modules: [
		{
			name: "app"
		}
	],
	// paths and shim are mirrored in app.js,
	paths: {
		app: 'app',
		cycle: 'bower/cycle/index',
		isotope: 'bower/isotope/index',
		jquery: 'bower/jquery/index',
		knockout: 'bower/knockout/index',
		underscore: 'bower/underscore/index',
		require: 'bower/require/index'
	}
})
