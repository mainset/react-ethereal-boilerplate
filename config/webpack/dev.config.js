/* eslint-disable */
var merge = require('webpack-merge');
var path = require('path');

var csrConfig = require('./csr.config.js');

var rootPath = path.join(__dirname, '..', '..');
var proxyConfig = require('../proxy');
/* eslint-enable */

module.exports = merge(csrConfig, {
  output: {
    filename: 'dist/scripts.js',
  },
  devtool: 'inline-source-map',
  devServer: {
    port: process.env.PORT || 8080,
    contentBase: rootPath,
    historyApiFallback: true,
    proxy: proxyConfig,
  },
});
