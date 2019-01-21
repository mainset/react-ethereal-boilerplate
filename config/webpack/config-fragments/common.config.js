require('dotenv').config();

/* eslint-disable */
var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var babelConfig = require('../../../babel.config.js');

var paths = require('../../paths');
/* eslint-enable */

module.exports = {
  mode: JSON.stringify(process.env.NODE_ENV),
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
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
    modules: [paths.srcPath, 'node_modules'],
    extensions: [
      // default for {extensions} key: https://webpack.js.org/configuration/resolve/#resolveloader
      '.js',
      '.json',
      // extra / custom
      '.ts',
      '.tsx',
    ],
  },
};
