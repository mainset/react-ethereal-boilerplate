/* eslint-disable */
var merge = require('webpack-merge');

var csrWebappDevConfig = require('./csr-webapp.dev.config.js');

var proxyConfig = require('../proxy');

var paths = require('./paths');
/* eslint-enable */

module.exports = merge(csrWebappDevConfig, {
  output: {
    filename: 'dist/scripts.js',
  },
  devtool: 'inline-source-map',
  devServer: {
    port: process.env.PORT || 8080,
    contentBase: paths.src,
    historyApiFallback: true,
    proxy: proxyConfig,
  },
});
