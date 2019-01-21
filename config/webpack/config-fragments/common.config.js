require('dotenv').config();

/* eslint-disable */
var path = require('path');

var babelConfig = require('../../../babel.config.js');

var paths = require('./paths');
/* eslint-enable */

module.exports = {
  mode: JSON.stringify(process.env.NODE_ENV),
  module: {
    rules: [
      {
        test: /.js?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: babelConfig,
      }, {
        test: /\.(svg|png)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[hash].[ext]',
              outputPath: 'dist/assets/images/',
            },
          },
        ],
      }, {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[hash].[ext]',
              outputPath: 'dist/assets/fonts',
            },
          },
        ],
      },
    ],
  },
  resolve: {
    modules: [paths.src, 'node_modules'],
  },
};
