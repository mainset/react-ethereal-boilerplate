import { generateEnvBasedWebpackConfig } from '@mainset/bundler-webpack';
import { runtimePathById } from '@mainset/cli/runtime';
import path from 'path';

const webpackConfigFragment = {
  resolve: {
    // NOTE: it is required to allow absolute imports from `src` directory e.g.
    // - `import { Page } from 'pages'`
    // - `import { reduxStore } from 'redux-store'`
    // - `import { util } from 'utils'`
    modules: [runtimePathById.src],
  },
};

export default generateEnvBasedWebpackConfig(webpackConfigFragment);
