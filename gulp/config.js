'use strict';

var conf = require('json-config-reader').read('package.json');

conf.src = './lib';
conf.build = './build';
conf.tpl = './tpl';
conf.dist = '.';
conf.webpack = function (dev) {
    var c = {
        output: {
            filename: '[name].js'
        }
    };

    if (dev) {
        c.devtool = 'source-map'
    }

    return c;
};

module.exports = conf;