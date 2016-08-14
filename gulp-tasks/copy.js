var gulp = require('gulp');

module.exports = () => {
	gulp.src('app/*.html')
		.pipe(gulp.dest('www'));

	gulp.src('assets/**/*')
		.pipe(gulp.dest('www'));

	gulp.src('bower_components/bootstrap-sass/assets/fonts/bootstrap/*')
		.pipe(gulp.dest('www'))
}
