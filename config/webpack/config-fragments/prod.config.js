/* eslint-disable */
var TerserPlugin = require('terser-webpack-plugin');
var OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
var MiniCssExtractPlugin = require('mini-css-extract-plugin');
/* eslint-enable */

module.exports = {
  output: {
    filename: 'dist/scripts.[hash].js',
    chunkFilename: 'dist/chunk.[chunkhash].js',
  },
  optimization: {
    minimizer: [
      new TerserPlugin({
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
