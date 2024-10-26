/* eslint-disable */
var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var babelConfig = require('../../babel.config');

var paths = require('../paths');
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
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
      },
    }),
    new HtmlWebpackPlugin({
      template: path.join(paths.srcPath, 'index.template.html'),
    }),
  ],
  resolve: {
    modules: [paths.rootPath, 'node_modules'],
  },
};
