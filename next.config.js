module.exports = {
  webpackDevMiddleware: (config) => {
    config.watchOptions = {
      poll: 5000,
      aggregateTimeout: 100,
    };
    return config;
  },
  // ...
};
