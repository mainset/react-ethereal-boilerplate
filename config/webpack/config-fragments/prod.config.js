/* eslint-disable */
var TerserPlugin = require('terser-webpack-plugin');
/* eslint-enable */

module.exports = {
  output: {
    filename: 'dist/scripts.[hash].js',
  },
  optimization: {
    minimizer: [
      new TerserPlugin({
        cache: true,
        parallel: true,
        sourceMap: true,
      }),
    ],
  },
};
