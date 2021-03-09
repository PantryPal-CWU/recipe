const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(
      '/api',
      createProxyMiddleware({
        target: 'http://localhost:4001',
        changeOrigin: true,
      })
    );
  };

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://www.recipepuppy.com',
      changeOrigin: true,
    })
  );
};