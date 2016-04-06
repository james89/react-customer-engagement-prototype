var gulp = require('gulp');
var del = require('del');
var runSequence = require('run-sequence').use(gulp);

require('gulp-load-tasks')('gulp-tasks');

gulp.task('build', callback => {
	runSequence('clean-dist', 'build-assets', callback);
});
