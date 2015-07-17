var gulp = require('gulp'),
    connect = require('gulp-connect'),
    Server = require('karma').Server;

gulp.task('serve', function () {
    connect.server({
        port: 8888,
        livereload: true,
        root: ['app']
    });
});

gulp.task('test', function (done) {
    new Server({
        configFile: __dirname + '/karma.conf.js',
        singleRun: true
    }, done).start();
});

gulp.task('tdd', function (done) {
    new Server({
        configFile: __dirname + '/karma.conf.js'
    }, done).start();
});

gulp.task('default', ['serve']);