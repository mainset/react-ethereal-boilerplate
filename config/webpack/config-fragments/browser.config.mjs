import path from 'path';
import webpack from 'webpack';

import paths from '../../paths.mjs';

const browserConfig = {
  output: {
    path: path.join(paths.rootPath, 'public'),
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
      },
    }),
  ],
};

export default browserConfig;
