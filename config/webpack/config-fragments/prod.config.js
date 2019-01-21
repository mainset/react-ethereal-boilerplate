/* eslint-disable */
var UglifyJsPlugin = require('uglifyjs-webpack-plugin');
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
    ],
  },
};
