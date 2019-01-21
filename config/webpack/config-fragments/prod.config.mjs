import TerserPlugin from 'terser-webpack-plugin';

const prodConfig = {
  output: {
    filename: 'dist/scripts.[hash].js',
  },
  optimization: {
    minimizer: [new TerserPlugin()],
  },
};

export default prodConfig;
