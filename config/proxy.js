module.exports = {
  '/api/': {
    target: process.env.API_REMOTE_URL,
    pathRewrite: { '^/api/': '/' },
    changeOrigin: true,
  },
  '/api-local/': {
    target: process.env.API_LOCAL_PATH,
    pathRewrite: { '^/api-local/': '/' },
  },
};
