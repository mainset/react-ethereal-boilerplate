import path from 'path';
import { merge } from 'webpack-merge';

import paths from '../../paths.mjs';

import browserConfig from './browser.config.mjs';
import commonConfig from './common.config.mjs';

const ssrWebappConfig = merge(commonConfig, browserConfig, {
  entry: ['@babel/polyfill', path.join(paths.srcPath, 'main-ssr.ts')],
});

export default ssrWebappConfig;
