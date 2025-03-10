import path from 'path';
import { merge } from 'webpack-merge';

import paths from '../../paths.mjs';

import commonConfig from './common.config.mjs';

const ssrServerConfig = merge(
  commonConfig,
  {
    entry: ['@babel/polyfill', path.join(paths.rootPath, 'config', 'server.mjs')],
    target: 'node',
    output: {
      path: path.join(paths.rootPath, 'private'),
      filename: 'server.js',
    },
  },
  {
    module: {
      rules: [
        {
          test: /\.(svg|png)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                emitFile: false,
              },
            },
          ],
        },
      ],
    },
  }
);

export default ssrServerConfig;
