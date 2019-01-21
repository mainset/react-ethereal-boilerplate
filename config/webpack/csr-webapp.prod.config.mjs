import HtmlWebpackPlugin from 'html-webpack-plugin';
import path from 'path';
import { merge } from 'webpack-merge';

import paths from '../paths.mjs';

import csrWebappConfig from './config-fragments/csr-webapp.config.mjs';
import prodConfig from './config-fragments/prod.config.mjs';

const csrWebappProdConfig = merge(csrWebappConfig, prodConfig, {
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(paths.srcPath, 'index.prod.template.html'),
    }),
  ],
});

export default csrWebappProdConfig;
