// Karma configuration
// Generated on Fri Jul 17 2015 16:41:52 GMT+0200 (CEST)

module.exports = function (config) {
    config.set({
        basePath: 'app',

        frameworks: ['jasmine'],

        files: [
            'libs/angular/angular.min.js',
            'libs/angular-mocks/angular-mocks.js',
            'libs/jquery/dist/jquery.min.js',
            'scripts/**/*.js',
            'tests/**/*_tests.js'
        ],

        exclude: [],

        preprocessors: {},

        reporters: ['progress'],

        port: 9876,

        colors: true,

        logLevel: config.LOG_INFO,

        autoWatch: true,

        browsers: ['Chrome'],

        singleRun: false
    })
};
