/* eslint-disable */
var UglifyJsPlugin = require('uglifyjs-webpack-plugin');
var OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
var MiniCssExtractPlugin = require('mini-css-extract-plugin');

var path = require('path');
var paths = require('./paths');
/* eslint-enable */

module.exports = {
  output: {
    filename: 'dist/scripts.[hash].js',
  },
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: true,
      }),
      new OptimizeCSSAssetsPlugin({}),
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'dist/styles.[hash].css',
    }),
  ],
};
