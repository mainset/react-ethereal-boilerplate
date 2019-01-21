import { merge } from 'webpack-merge';

import paths from '../paths.mjs';
import proxyConfig from '../proxy.mjs';

import csrWebappDevConfig from './csr-webapp.dev.config.mjs';

const csrServerDevConfig = merge(csrWebappDevConfig, {
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
    proxy: Object.values(proxyConfig),
  },
});

export default csrServerDevConfig;
