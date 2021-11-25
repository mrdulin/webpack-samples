const { merge } = require("webpack-merge");
const base = require("./webpack.base");
const path = require("path");

module.exports = merge(base, {
  mode: "production",
  devtool: "inline-source-map",
  output: {
    path: path.join(__dirname, "../dist"),
    filename: "bundle.js",
  },
});
