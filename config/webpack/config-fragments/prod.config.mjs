import TerserPlugin from 'terser-webpack-plugin';

const prodConfig = {
  output: {
    filename: 'dist/scripts.[hash].js',
    chunkFilename: 'dist/chunk.[chunkhash].js',
  },
  optimization: {
    minimizer: [new TerserPlugin()],
  },
};

export default prodConfig;
