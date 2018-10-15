/* eslint-disable */
var MiniCssExtractPlugin = require('mini-css-extract-plugin');
/* eslint-enable */

module.exports = {
  output: {
    filename: 'dist/scripts.js',
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'dist/styles.css',
    }),
  ],
};
