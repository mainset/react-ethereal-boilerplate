// handle '/api' only if '/' is presence after 'api' like: '/api/'
const apiLocalPathRegExp = '^/api(?=/)';

const proxyConfig = {
  '/api': {
    target: process.env.API_REMOTE_URL,
    pathRewrite: { [apiLocalPathRegExp]: '' },
    changeOrigin: true,
  },
  '/api-local': {
    target: process.env.API_LOCAL_PATH,
    pathRewrite: { '^/api-local': '' },
  },
};

export default proxyConfig;
