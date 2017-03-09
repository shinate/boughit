'use strict';

var gulp = require('gulp');
var plugin = require('gulp-load-plugins')();
var config = require('./gulp/config.js');

plugin.through = require('through-gulp');

var tasks = require('require-dir')('./gulp/tasks/');
for (var t in tasks) {
    tasks[t](gulp, plugin, config);
}