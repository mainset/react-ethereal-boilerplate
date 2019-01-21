/* eslint-disable */
var { merge } = require('webpack-merge');

var path = require('path');
var paths = require('../../paths');

var commonConfig = require('./common.config.js');
var browserConfig = require('./browser.config.js');
/* eslint-enable */

module.exports = merge(commonConfig, browserConfig, {
  entry: ['@babel/polyfill', path.join(paths.srcPath, 'main-csr.ts')],
});
