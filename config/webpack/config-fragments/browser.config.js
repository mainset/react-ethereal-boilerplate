/* eslint-disable */
var webpack = require('webpack');
var path = require('path');

var rootPath = path.join(__dirname, '..', '..', '..');
/* eslint-enable */

module.exports = {
  output: {
    path: path.join(rootPath, 'public'),
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
      },
    }),
  ],
};
