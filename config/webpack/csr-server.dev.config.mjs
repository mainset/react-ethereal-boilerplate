import { merge } from 'webpack-merge';

// NOTE: {import 'dotenv/config';} should be imported as soon as possible
// because of missing {process.env.API_REMOTE_URL} - proxy isn't set-up properly
import csrWebappDevConfig from './csr-webapp.dev.config.mjs';

import paths from '../paths.mjs';
import proxyConfig from '../proxy.mjs';

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
