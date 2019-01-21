/* eslint-disable */
var HtmlWebpackPlugin = require('html-webpack-plugin');
var { merge } = require('webpack-merge');
var path = require('path');

var paths = require('../paths');

var csrWebappConfig = require('./config-fragments/csr-webapp.config.js');

var devConfig = require('./config-fragments/dev.config.js');
/* eslint-enable */

module.exports = merge(csrWebappConfig, devConfig, {
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(paths.srcPath, 'index.dev.template.html'),
    }),
  ],
});
