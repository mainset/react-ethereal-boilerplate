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
  '/api-boilerplate/': {
    context: ['/api-boilerplate/'],
    target: process.env.API__EXPRESS_ETHEREAL_BOILERPLATE,
    pathRewrite: { '^/api-boilerplate/': '/' },
    changeOrigin: true,
    secure: false,
  },
};

export default proxyConfig;
