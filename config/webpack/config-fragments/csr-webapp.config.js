/* eslint-disable */
var HtmlWebpackPlugin = require('html-webpack-plugin');
var merge = require('webpack-merge');

var path = require('path');
var paths = require('./paths');

var common = require('./common.config.js');
var browser = require('./browser.config.js');
/* eslint-enable */

module.exports = merge(common, browser, {
  entry: [
    '@babel/polyfill',
    path.join(paths.src, 'main-csr.js'),
  ],
  plugins: [
    new HtmlWebpackPlugin({ template: path.join(paths.src, 'index.template.html') }),
  ],
});
