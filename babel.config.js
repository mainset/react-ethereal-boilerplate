// eslint-disable-next-line no-var
var babelConfig = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current',
          chrome: '60',
          firefox: '60',
          safari: '11.1',
          edge: '17',
          ie: '11',
        },
      },
    ],
    '@babel/preset-react',
    '@babel/preset-typescript',
  ],
  plugins: [],
};

module.exports = babelConfig;
