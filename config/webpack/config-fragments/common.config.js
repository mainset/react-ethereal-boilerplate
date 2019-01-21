require('dotenv').config();

/* eslint-disable */
var path = require('path');

var babelConfig = require('../../../babel.config.js');

var paths = require('./paths');
/* eslint-enable */

module.exports = {
  mode: JSON.stringify(process.env.NODE_ENV),
  output: {
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /.js?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: babelConfig,
        },
      },
      {
        test: /\.(svg|png)$/,
        type: 'asset/resource',
        generator: {
          filename: '[name].[hash].[ext]',
          outputPath: 'dist/assets/images',
        },
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        type: 'asset/resource',
        generator: {
          filename: '[name].[hash].[ext]',
          outputPath: 'dist/assets/fonts',
        },
      },
    ],
  },
  resolve: {
    modules: [paths.src, 'node_modules'],
  },
};
