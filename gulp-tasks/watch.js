var gulp = require('gulp');

module.exports = () => {
	gulp.watch(
		['app/sass/**/*.scss', 'app/components/**/*.scss'], ['sass']
	);
}
