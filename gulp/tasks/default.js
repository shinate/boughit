'use strict';

module.exports = function (gulp, PLUGIN, CONF) {
    gulp.task('default', ['combine', 'build', 'build-dev']);
};