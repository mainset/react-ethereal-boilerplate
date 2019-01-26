/* eslint-disable */
var UglifyJsPlugin = require('uglifyjs-webpack-plugin');

var path = require('path');
var paths = require('./paths');
/* eslint-enable */

module.exports = {
  output: {
    filename: 'dist/scripts.[hash].js',
    chunkFilename: 'dist/chunk.[chunkhash].js',
  },
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: true,
      }),
    ],
  },
};
