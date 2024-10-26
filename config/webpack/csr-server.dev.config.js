/* eslint-disable */
var { merge } = require('webpack-merge');

var paths = require('../paths');
var proxyConfig = require('../proxy');

var csrWebappDevConfig = require('./csr-webapp.dev.config.js');
/* eslint-enable */

module.exports = merge(csrWebappDevConfig, {
  output: {
    filename: 'dist/scripts.js',
  },
  devtool: 'inline-source-map',
  devServer: {
    port: process.env.PORT || 8080,
    static: {
      directory: paths.rootPath,
    },
    historyApiFallback: true,
    proxy: Object.values(proxyConfig),
  },
});
