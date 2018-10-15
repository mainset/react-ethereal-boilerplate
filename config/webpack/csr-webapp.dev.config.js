/* eslint-disable */
var HtmlWebpackPlugin = require('html-webpack-plugin');
var MiniCssExtractPlugin = require('mini-css-extract-plugin');
var merge = require('webpack-merge');

var path = require('path');
var paths = require('./paths');

var csrWebappConfig = require('./config-fragments/csr-webapp.config.js');

var devConfig = require('./config-fragments/dev.config.js');
/* eslint-enable */

module.exports = merge.strategy({ 'module.rules': 'prepend' })(csrWebappConfig, devConfig, {
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(paths.src, 'index.dev.template.html'),
    }),
    new MiniCssExtractPlugin({
      filename: 'dist/styles.css',
    }),
  ],
});
