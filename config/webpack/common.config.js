require('dotenv').config();

/* eslint-disable */
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');

var babelConfig = require('../../babel.config');

var rootPath = path.join(__dirname, '..', '..');
var srcPath = path.join(rootPath, 'src');
/* eslint-enable */

module.exports = {
  mode: JSON.stringify(process.env.NODE_ENV),
  entry: [
    '@babel/polyfill',
    path.join(srcPath, 'main.js'),
  ],
  output: {
    path: path.join(rootPath, 'public'),
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /.js?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: babelConfig,
        },
      },
      {
        test: /\.(svg|png)$/,
        type: 'asset/resource',
        generator: {
          filename: '[name].[hash].[ext]',
          outputPath: 'dist/assets/images',
        },
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        type: 'asset/resource',
        generator: {
          filename: '[name].[hash].[ext]',
          outputPath: 'dist/assets/fonts',
        },
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
      },
    }),
    new HtmlWebpackPlugin({ template: path.join(srcPath, 'index.template.html') }),
  ],
  resolve: {
    modules: [srcPath, 'node_modules'],
  },
};
