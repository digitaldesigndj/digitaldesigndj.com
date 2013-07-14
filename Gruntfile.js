module.exports = function(grunt) {

	grunt.initConfig({
		bower: {
			target: {
				rjsConfig: 'src/documents/js/app.js'
			}
		}
	});

	// Load the plugin that provides the task.
	grunt.loadNpmTasks('grunt-bower-requirejs');

	// Default task(s).
	grunt.registerTask('default', ['bower']);

};