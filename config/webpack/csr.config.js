/* eslint-disable */
var HtmlWebpackPlugin = require('html-webpack-plugin');
var merge = require('webpack-merge');
var path = require('path');

var common = require('./common.config.js');
var browser = require('./browser.config.js');
var prod = require('./prod.config.js');

var rootPath = path.join(__dirname, '..', '..');
var srcPath = path.join(rootPath, 'src');
/* eslint-enable */

module.exports = merge(common, browser, prod, {
  entry: [
    '@babel/polyfill',
    path.join(srcPath, 'main-csr.js'),
  ],
  plugins: [
    new HtmlWebpackPlugin({ template: path.join(srcPath, 'index.template.html') }),
  ],
});
