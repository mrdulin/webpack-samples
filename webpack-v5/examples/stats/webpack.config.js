const path = require("path");

module.exports = {
  mode: "none",
  entry: "./src/index.js",
  output: {
    filename: "[name].js",
    clean: true,
    path: path.resolve(__dirname, "dist"),
  },
  cache: {
    type: "filesystem",
    buildDependencies: {
      config: [__filename],
    },
  },
  stats: {
    // logging: 'verbose',
    // assets: false,
    // moduleAssets: false,
    // chunks: false,
    // modules: false,
    //  cachedModules: false
  },
};
