var gulp = require('gulp');
var browserSync = require('browser-sync');

module.exports = () => {
	return browserSync.init({
		port: 9000,
		files: [
			'./www/assets/**/*.+(js|css)'
		],
		server: {
			baseDir: './www'
		},
		open: false,
		notify: false
	})
}
