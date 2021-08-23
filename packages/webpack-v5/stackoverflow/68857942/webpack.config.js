const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: {
    index: "./src/ts/pages/index.ts",
    about: "./src/ts/pages/about.ts",
  },
  output: {
    filename: "bundle.[name].js",
    path: path.resolve(__dirname, "./dist"),
    clean: true,
    publicPath: "",
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Index",
      filename: "index.html",
      template: "src/templates/index.html",
      chunks: ["index"],
    }),
    new HtmlWebpackPlugin({
      title: "about",
      filename: "about.html",
      template: "src/templates/about.html",
      chunks: ["about"],
    }),
  ],
};
