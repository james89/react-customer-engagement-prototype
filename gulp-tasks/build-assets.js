var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var sass = require('gulp-sass');
var flatten = require('gulp-flatten');

function copy(glob, dest) {
	if (!glob || !dest) {
		return;
	}

	gulp.src(glob)
		.pipe(gulp.dest(dest));
}

module.exports = () => {
	// copy html and assets
	copy('app/*.html', './dist');
	copy('app/assets/**/*', './dist/assets');

	// browserify
	browserify({
		entries: './app/main.jsx',
		debug: false,
		transform: ['babelify', ['uglifyify', {global: true}]]
	})
		.bundle()
		.pipe(source('main.js'))
		.pipe(gulp.dest('./dist/assets/js'));

	// sass
	gulp.src('./app/**/*.scss')
		.pipe(sass({
			includePaths: [
				'app/components',
				'bower_components/bootstrap-sass/assets/stylesheets'
			],
			outputStyle: 'compressed'
		}).on('error', sass.logError))
		.pipe(flatten())
		.pipe(gulp.dest('./dist/assets/css'));
}
