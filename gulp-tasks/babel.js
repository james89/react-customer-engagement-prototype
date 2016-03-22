var gulp = require('gulp');
var babel = require('gulp-babel');

module.exports = () => {
	gulp.src('app/*.jsx')
		.pipe(babel())
		.pipe(gulp.dest('www/assets/js'));
}
