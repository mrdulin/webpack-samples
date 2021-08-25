const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/app.js",
  output: {
    filename: "app.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "",
  },
  module: {
    rules: [
      {
        test: /\.(png|svg)$/i,
        type: "asset/resource",
        generator: {
          filename: "[name].[ext]",
        },
      },
    ],
  },
};
