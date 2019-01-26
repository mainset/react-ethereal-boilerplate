/* eslint-disable */
var TerserPlugin = require('terser-webpack-plugin');
/* eslint-enable */

module.exports = {
  output: {
    filename: 'dist/scripts.[hash].js',
    chunkFilename: 'dist/chunk.[chunkhash].js',
  },
  optimization: {
    minimizer: [new TerserPlugin()],
  },
};
