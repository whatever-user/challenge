var gulp = require('gulp'),
    connect = require('gulp-connect');

gulp.task('webserver', function () {
    connect.server({
        port: 8888,
        livereload: true,
        root: ['app']
    });
});

gulp.task('default', ['webserver']);