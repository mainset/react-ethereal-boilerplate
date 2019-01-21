/* eslint-disable */
var merge = require('webpack-merge');
var path = require('path');

var common = require('./common.config.js');

var rootPath = path.join(__dirname, '..', '..', '..');
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
});
