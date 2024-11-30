import path from 'path';
import { merge } from 'webpack-merge';

import ENVIRONMENT_BY_ID from './constants.mjs';
import paths from './paths.mjs';

import developmentBundlerConfig from './webpack/dev.config.mjs';
import productionBundlerConfig from './webpack/prod.config.mjs';

const reactEtherealBoilerplateConfig = {
  entry: ['@babel/polyfill', path.join(paths.srcPath, 'main.tsx')],
  output: {
    path: path.join(paths.rootPath, 'public'),
    publicPath: '/',
  },
};
const developmentModeConfig = merge(
  reactEtherealBoilerplateConfig,
  developmentBundlerConfig
);

const productionModeConfig = merge(
  reactEtherealBoilerplateConfig,
  productionBundlerConfig
);

const BUNDLER_CONFIG_BY_NODE_ENV = {
  [ENVIRONMENT_BY_ID.PRODUCTION]: productionModeConfig,
  [ENVIRONMENT_BY_ID.DEVELOPMENT]: developmentModeConfig,
};

export default BUNDLER_CONFIG_BY_NODE_ENV[process.env.NODE_ENV];
