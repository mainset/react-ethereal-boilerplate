import TerserPlugin from 'terser-webpack-plugin';
import { merge } from 'webpack-merge';

import common from './common.config.mjs';

const prodConfig = merge(common, {
  output: {
    filename: 'dist/scripts.[hash].js',
  },
  optimization: {
    minimizer: [new TerserPlugin()],
  },
});

export default prodConfig;
