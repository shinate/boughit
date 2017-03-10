'use strict';

var path = require('path');
var fs = require('fs');

module.exports = function (gulp, PLUGIN, CONF) {
    gulp.task('combine', function () {
        return gulp.src([CONF.src + '/**/*.js'])
            .pipe(PLUGIN.through(function (file, env, cb) {
                var relPath = path.relative(CONF.src, file.path);
                var modName = path.join(path.dirname(relPath), path.basename(relPath, '.js'));//.replace(new RegExp(path.sep), '.');
                var content = 'r(\'' + modName + '\', require(\'' + CONF.src + '/' + relPath + '\'));';
                file.contents = new Buffer(content);
                this.push(file);
                cb();
            }))
            .pipe(PLUGIN.concat('index.js'))
            .pipe(PLUGIN.through(function (file, env, cb) {
                var wrap = fs.readFileSync(CONF.tpl + '/bundle.tpl.js').toString();
                file.contents = new Buffer(wrap.replace(/\/\* \{contents\} \*\//, file.contents.toString()));
                this.push(file);
                cb();
            }))
            .pipe(gulp.dest(CONF.dist));
    });
};