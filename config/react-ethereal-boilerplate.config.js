var path = require('path');
var { merge } = require('webpack-merge');

var ENVIRONMENT_BY_ID = require('./constants');
var paths = require('./paths');

var developmentBundlerConfig = require('./webpack/dev.config');
var productionBundlerConfig = require('./webpack/prod.config');

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

module.exports = BUNDLER_CONFIG_BY_NODE_ENV[process.env.NODE_ENV];
