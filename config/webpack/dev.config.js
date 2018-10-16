/* eslint-disable */
var { merge } = require('webpack-merge');

var paths = require('../paths');
var proxyConfig = require('../proxy');

var common = require('./common.config.js');
/* eslint-enable */

module.exports = merge(common, {
  output: {
    filename: 'dist/scripts.js',
  },
  devtool: 'inline-source-map',
  devServer: {
    port: 8080,
    static: {
      directory: paths.rootPath,
    },
    historyApiFallback: true,
    proxy: proxyConfig,
  },
});
