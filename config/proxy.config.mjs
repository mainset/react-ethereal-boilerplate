const proxyConfigByPath = {
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
    pathRewrite: { '^/api-boilerplate/': '/api/v1' },
    changeOrigin: true,
    secure: false,
  },
  // Add WebSocket proxy
  '/ws-connection': {
    context: ['/ws-connection'],
    target: process.env.API__EXPRESS_ETHEREAL_BOILERPLATE,
    pathRewrite: { '^/ws-connection': '/ws' },
    changeOrigin: true,
    secure: false,
    ws: true, // Enable WebSocket proxying
  },
};

export default proxyConfigByPath;
