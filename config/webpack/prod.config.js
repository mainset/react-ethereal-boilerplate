/* eslint-disable */
var { merge } = require('webpack-merge');
var TerserPlugin = require('terser-webpack-plugin');

var common = require('./common.config.js');
/* eslint-enable */

module.exports = merge(common, {
  output: {
    filename: 'dist/scripts.[hash].js',
  },
  optimization: {
    minimizer: [new TerserPlugin()],
  },
});
