var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var flatten = require('gulp-flatten');
var concat = require('gulp-concat');
var opts = {
	includePaths: [
		'app/components',
		'bower_components/bootstrap-sass/assets/stylesheets'
	]
}

module.exports = () => {
	return gulp.src('./app/**/*.scss')
		.pipe(sourcemaps.init())
		.pipe(sass(opts).on('error', sass.logError))
		.pipe(sourcemaps.write('./maps'))
		.pipe(concat('main.css'))
		.pipe(flatten())
		.pipe(gulp.dest('./www/assets/css'));
};
