const proxyConfig = {
  '/api/': {
    context: ['/api/'],
    target: process.env.API_REMOTE_URL,
    pathRewrite: { '^/api/': '/' },
    changeOrigin: true,
  },
  '/api-local/': {
    context: ['/api-local/'],
    target: process.env.API_LOCAL_PATH,
    pathRewrite: { '^/api-local/': '/' },
  },
};

export default proxyConfig;
