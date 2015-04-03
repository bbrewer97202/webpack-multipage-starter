var path = require("path");
var webpack = require("webpack");
var webpackConfig = require("./webpack.config.js");

module.exports = function(grunt) {

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		webpack: {
			options: webpackConfig,		
			"dist": {
				plugins: webpackConfig.plugins.concat(
					new webpack.DefinePlugin({
						"process.env": {
							"NODE_ENV": JSON.stringify("production")
						}
					}),
					new webpack.optimize.DedupePlugin(),
					new webpack.optimize.UglifyJsPlugin()
				)
			},
			"dev": {
				debug: true,
				plugins: webpackConfig.plugins.concat(
					new webpack.optimize.DedupePlugin()
				)				
			}
		},
		connect: {
			server: {
				options: {
					port: 8000,
					base: 'dist',
					hostname: '*',
					keepalive: true
				}
			}
		},
		concat: {
			dist: {
				src: ['node_modules/es5-shim/es5-shim.min.js', 'node_modules/es5-shim/es5-sham.min.js'],
				dest: 'dist/js/es5-shim.min.js',
			}
		},
		copy: {
			dist: {
				files: [
					{
						expand: true, 
						flatten: true,
						src: ['src/entry/**/*.html'], 
						dest: 'dist/', 
						filter: 'isFile'
					},
				],
			},
		},
		watch: {
			scripts: {
				files: ['./src/**/*.js','./src/**/*.scss'],
				tasks: ['webpack:dev'],
			},
		}
	});
	
	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-webpack');

	//tasks
	grunt.registerTask('default', ['concat', 'copy', 'webpack:dev', 'watch']);
	grunt.registerTask('production', ['webpack:dist']);

};

