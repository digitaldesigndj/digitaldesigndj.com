module.exports = function(grunt) {

	grunt.initConfig({
		bower: {
			target: {
				rjsConfig: 'src/documents/js/common.js'
			}
		},
		copy: {
			main: {
				files: [
					// {expand: true, src: ['path/*'], dest: 'dest/', filter: 'isFile'}, // includes files in path
					// {src: ['out/**'], dest: 'dest/'}, // includes files in path and its subdirs
					{expand: true, cwd: 'out/', src: ['**'], dest: '../digitaldesigndj.com.out'},
				]
			}
		}
	});

	// Load the plugin that provides the task.
	grunt.loadNpmTasks('grunt-bower-requirejs');
	grunt.loadNpmTasks('grunt-contrib-copy');

	// Default task(s).
	grunt.registerTask('default', ['bower']);
	grunt.registerTask('move', ['copy']);

};
