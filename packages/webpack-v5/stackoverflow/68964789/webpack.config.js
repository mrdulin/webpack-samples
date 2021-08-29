const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "bundle.js",
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /\.json5$/i,
        loader: "json5-loader",
        type: "javascript/auto",
      },
    ],
  },
};
