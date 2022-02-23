const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: process.env.BACKEND_URL || 'https://operator-node-app-32192-prod.herokuapp.com',
      changeOrigin: true
    })
  );
};
