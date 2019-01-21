import HtmlWebpackPlugin from 'html-webpack-plugin';
import path from 'path';
import { merge } from 'webpack-merge';

import paths from '../paths.mjs';

import ssrServerConfig from './config-fragments/ssr-server.config.mjs';
import ssrWebappConfig from './config-fragments/ssr-webapp.config.mjs';

import prodConfig from './config-fragments/prod.config.mjs';

const ssrProdConfig = [
  ssrServerConfig,
  merge(ssrWebappConfig, prodConfig, {
    plugins: [
      new HtmlWebpackPlugin({
        template: path.join(paths.srcPath, 'index.prod.template.html'),
        filename: 'server.html',
      }),
    ],
  }),
];

export default ssrProdConfig;
