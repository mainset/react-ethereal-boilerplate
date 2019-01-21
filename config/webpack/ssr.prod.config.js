/* eslint-disable */
var HtmlWebpackPlugin = require('html-webpack-plugin');
var merge = require('webpack-merge');

var path = require('path');
var paths = require('./paths');

var ssrServerConfig = require('./config-fragments/ssr-server.config.js');
var ssrWebappConfig = require('./config-fragments/ssr-webapp.config.js');

var prodConfig = require('./config-fragments/prod.config.js');
/* eslint-enable */

module.exports = [
  ssrServerConfig,
  merge(ssrWebappConfig, prodConfig, {
    plugins: [
      new HtmlWebpackPlugin({
        template: path.join(paths.src, 'index.prod.template.html'),
        filename: 'server.html',
      }),
    ],
  }),
];
