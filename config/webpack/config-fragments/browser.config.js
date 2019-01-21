/* eslint-disable */
var webpack = require('webpack');
var path = require('path');

var paths = require('../../paths');
/* eslint-enable */

module.exports = {
  output: {
    path: path.join(paths.rootPath, 'public'),
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
      },
    }),
  ],
};
