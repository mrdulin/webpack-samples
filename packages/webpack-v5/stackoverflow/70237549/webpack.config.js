const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const isProduction = process.env.NODE_ENV === "production";

const config = {
  entry: "./index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
  },
  plugins: [new HtmlWebpackPlugin()],
  devServer: {
    open: true,
  },
};

module.exports = () => {
  if (isProduction) {
    config.mode = "production";
  } else {
    config.mode = "development";
  }
  return config;
};
