//  node r.js -o app.build.js

({
	appDir: "stg/",
	baseUrl: "js/",
	dir: "out/",
	// optimize: "none",  //Comment out to uglify,
	preserveLicenseComments: false,
	modules: [
		{
			name: 'common',
			include: ['jquery', 
				'main',
				'scroll-page-offscreen',
				'live-reload'
			]
		},
		{
			name: 'koexample',
			include: ['knockout'],
			exclude: ['common']
		},
		{
			name: 'cycle',
			include: ['jquery'],
			exclude: ['common']
		}
	],
	// paths and shim are mirrored in app.js,
	paths: {
		main: 'lib/main',
		socketio: 'lib/socketio',
		'live-reload': 'lib/live-reload',
		'scroll-page-offscreen': 'lib/scroll-page-offscreen',
		cycle: '../bower/cycle/index',
		jquery: '../bower/jquery/index',
		knockout: '../bower/knockout/index',
		require: '../bower/require/index',
		underscore: '../bower/underscore/index'
	// }
	},
	shim: {
		cycle: {
			deps: ['jquery']
		},
		'scroll-page-offscreen': {
			deps: ['jquery']
		},
		jquery: {
			exports: '$'
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
})
