import { merge } from 'webpack-merge';

import paths from '../paths.mjs';
import proxyConfig from '../proxy.mjs';

import common from './common.config.mjs';

const devConfig = merge(common, {
  output: {
    filename: 'dist/scripts.js',
  },
  devtool: 'inline-source-map',
  devServer: {
    port: process.env.PORT || 8080,
    static: {
      directory: paths.rootPath,
    },
    historyApiFallback: true,
    proxy: proxyConfig,
  },
});

export default devConfig;
