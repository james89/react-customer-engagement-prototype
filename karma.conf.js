// Karma configuration
// Generated on Tue Mar 22 2016 21:11:04 GMT+0000 (GMT)

var debug = process.argv.indexOf('--debug') !== -1;
var chrome = process.argv.indexOf('--chrome') !== -1;
var live = process.argv.indexOf('--live') !== -1;
var istanbul = require('browserify-babel-istanbul');

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine', 'browserify'],


    // list of files / patterns to load in the browser
    files: [
      'app/components/**/*.js?(x)'
    ],


    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      'app/components/**/*.js?(x)': ['browserify']
    },

    browserify: {
			debug: debug,
            transform: ['babelify', istanbul({
				ignore: ['**/*.spec.js?(x)', '**/node_modules/**']
			})],
			extensions: ['.jsx', '.js']
	 	},

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['html', 'progress', 'tape', 'coverage'],


    coverageReporter: {
      dir : 'coverage',
      reporters: [
          { type: 'html', subdir: 'html' }
      ]
    },


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: debug ? config.LOG_DEBUG : config.LOG_ERROR,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: chrome || live,

    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: [chrome ? 'Chrome' : 'PhantomJS'],

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: !(chrome || live),

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  })
}
