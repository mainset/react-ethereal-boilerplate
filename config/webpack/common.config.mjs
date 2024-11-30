import HtmlWebpackPlugin from 'html-webpack-plugin';
import path from 'path';
import webpack from 'webpack';

import babelConfig from '../../babel.config.js';

import paths from '../paths.mjs';

const commonConfig = {
  mode: JSON.stringify(process.env.NODE_ENV),
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
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
    new HtmlWebpackPlugin({
      template: path.join(paths.srcPath, 'index.template.html'),
    }),
  ],
  resolve: {
    modules: [paths.srcPath, 'node_modules'],
    extensions: [
      // default for {extensions} key: https://webpack.js.org/configuration/resolve/#resolveloader
      '.js',
      '.json',
      // extra / custom
      '.ts',
      '.tsx',
    ],
  },
};

export default commonConfig;
