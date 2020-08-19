module.exports = {
  mongodbMemoryServerOptions: {
    // pay attention for the mongodb version you're using on production and the version your host uses
    binary: {
      version: '4.0.3',
      skipMD5: true,
    },
    instance: {
      dbName: 'jest',
    },
    autoStart: false,
  },
};
