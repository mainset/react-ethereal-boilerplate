/* eslint-disable */
var merge = require('webpack-merge');
var path = require('path');

var commonConfig = require('./common.config.js');
var browserConfig = require('./browser.config.js');

var paths = require('./paths');
/* eslint-enable */

module.exports = merge(commonConfig, browserConfig, {
  entry: [
    '@babel/polyfill',
    path.join(paths.src, 'main-ssr.js'),
    path.join(paths.src, 'styles', 'main.scss'),
  ],
});
