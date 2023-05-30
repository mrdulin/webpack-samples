const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    publicPath: "/",
    clean: true,
  },
  devServer: {
    hot: true,
    port: 3000,
    open: true
  },
  resolve: {
    extensions: [".*", ".js", ".jsx", ".css"],
  },
  module: {
    rules: [
      {
        test: /\.(s[ac]|c)ss$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(png|jpg|jpe?g|gif|woff|woff2|eot|ttf|otf)$/i,
        type: "asset",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({ template: "./public/index.html" })
  ],
};

