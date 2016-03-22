module.exports = () => {
	var watchify = require('watchify');
	var browserify = require('browserify');
	var gulp = require('gulp');
	var source = require('vinyl-source-stream');
	var buffer = require('vinyl-buffer');
	var gutil = require('gulp-util');
	var sourcemaps = require('gulp-sourcemaps');
	var assign = require('object-assign');
	var browserSync = require('browser-sync').create();

	var customOpts = {
		entries: ['./app/main.jsx'],
		debug: true
	};
	var opts = assign({}, watchify.args, customOpts);
	var b = watchify(browserify(opts));

	b.transform('babelify');

	b.on('update', bundle); // on any dep update, runs the bundler
	b.on('log', gutil.log); // output build logs to terminal

	function bundle() {
		return b.bundle()
			.on('error', gutil.log.bind(gutil, 'Browserify Error'))
			.pipe(source('main.js'))
			// optional, remove if you don't need to buffer file contents
			.pipe(buffer())
			// optional, remove if you dont want sourcemaps
			.pipe(sourcemaps.init({loadMaps: true}))
			 // Add transformation tasks to the pipeline here.
			.pipe(sourcemaps.write('./'))
			.pipe(gulp.dest('./www/assets/js'))
			.pipe(browserSync.stream({match: '**/*.js'}));
	}

	return bundle();
}
