module.exports = {
  "/api/cool": {
    target: "http://jsonplaceholder.typicode.com",
    changeOrigin: true,
    logLevel: 'debug',
    pathRewrite: {
      "^/api/cool": "",
    },
  },
  "/api/nice": {
    target: "http://jsonplaceholder.typicode.com",
    changeOrigin: true,
    logLevel: 'debug',
    pathRewrite: {
      "^/api/nice": "",
    },
  },
};
