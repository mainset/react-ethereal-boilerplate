/* eslint-disable */
var merge = require('webpack-merge');

var csrWebapp = require('./config-fragments/csr-webapp.config.js');

var proxyConfig = require('../proxy');

var paths = require('./paths');
/* eslint-enable */

module.exports = merge(csrWebapp, {
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
