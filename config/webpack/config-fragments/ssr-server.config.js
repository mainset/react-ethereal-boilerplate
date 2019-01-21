/* eslint-disable */
var { merge } = require('webpack-merge');
var path = require('path');

var paths = require('../../paths');

var commonConfig = require('./common.config.js');
/* eslint-enable */

module.exports = merge(commonConfig, {
  entry: [
    '@babel/polyfill',
    path.join(paths.rootPath, 'config', 'server.tsx'),
  ],
  target: 'node',
  output: {
    path: path.join(paths.rootPath, 'private'),
    filename: 'server.js',
  },
});
