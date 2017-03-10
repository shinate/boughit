'use strict';

var path = require('path');
var fs = require('fs');
var ws = require('webpack-stream');

module.exports = function (gulp, PLUGIN, CONF) {
    gulp.task('build', ['combine'], function () {
        return gulp.src([CONF.dist + '/build.js'])
            .pipe(PLUGIN.named())
            .pipe(ws(CONF.webpack(0)))
            .pipe(PLUGIN.uglify())
            .pipe(PLUGIN.rename('boughit.min.js'))
            .pipe(gulp.dest(CONF.build));
    });

    gulp.task('build-dev', ['combine'], function () {
        return gulp.src([CONF.dist + '/build.js'])
            .pipe(PLUGIN.named())
            .pipe(ws(CONF.webpack(1)))
            .pipe(PLUGIN.rename(function (path) {
                var ng = (path.basename + path.extname).split('.');
                path.basename = 'boughit';
                path.extname = '.' + ng.slice(1, ng.length).join('.');
                console.log(path);
            }))
            .pipe(gulp.dest(CONF.build));
    });
};