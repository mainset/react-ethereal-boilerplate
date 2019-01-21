/* eslint-disable */
var HtmlWebpackPlugin = require('html-webpack-plugin');
var merge = require('webpack-merge');

var path = require('path');
var paths = require('./paths');

var csrWebappConfig = require('./config-fragments/csr-webapp.config.js');

var prodConfig = require('./config-fragments/prod.config.js');
/* eslint-enable */

module.exports = merge(csrWebappConfig, prodConfig, {
  plugins: [
    new HtmlWebpackPlugin({ template: path.join(paths.src, 'index.prod.template.html') }),
  ],
});
