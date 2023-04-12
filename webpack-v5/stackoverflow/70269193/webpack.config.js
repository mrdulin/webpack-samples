const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.lang$/,
        type: "asset/source",
        exclude: "/node_modules/",
      },
    ],
  },
  plugins: [new HTMLWebpackPlugin()],
};
