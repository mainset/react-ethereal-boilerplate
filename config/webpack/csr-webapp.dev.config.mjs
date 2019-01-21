import HtmlWebpackPlugin from 'html-webpack-plugin';
import path from 'path';
import { merge } from 'webpack-merge';

import paths from '../paths.mjs';

import csrWebappConfig from './config-fragments/csr-webapp.config.mjs';
import devConfig from './config-fragments/dev.config.mjs';

const csrWebappDevConfig = merge(csrWebappConfig, devConfig, {
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(paths.srcPath, 'index.dev.template.html'),
    }),
  ],
});

export default csrWebappDevConfig;
