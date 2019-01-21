/* eslint-disable */
var HtmlWebpackPlugin = require('html-webpack-plugin');
var merge = require('webpack-merge');
var path = require('path');

var common = require('./common.config.js');

var rootPath = path.join(__dirname, '..', '..');
var srcPath = path.join(rootPath, 'src');
/* eslint-enable */

module.exports = merge(common, {
  entry: [
    '@babel/polyfill',
    path.join(rootPath, 'config', 'server.js'),
  ],
  target: 'node',
  output: {
    path: path.join(rootPath, 'private'),
    filename: 'server.js',
  },
  plugins: [
    new HtmlWebpackPlugin({ template: path.join(srcPath, 'index.template.html') }),
  ],
});
