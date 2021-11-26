const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");

module.exports = [
  {
    mode: "development",
    entry: {
      students: "./students/js/index.js",
    },
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: "[name].js",
      publicPath: "/students/",
    },
    module: {
      rules: [
        {
          test: /\.css$/i,
          use: [MiniCssExtractPlugin.loader, "css-loader"],
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        filename: "student.html",
        template: "./students/templates/index.html",
        chunks: ["students"],
      }),
      new MiniCssExtractPlugin(),
    ],
  },
  {
    mode: "development",
    entry: {
      staff: "./staff/js/index.js",
    },
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: "[name].js",
      publicPath: "/",
    },
    module: {
      rules: [
        {
          test: /\.css$/i,
          use: [MiniCssExtractPlugin.loader, "css-loader"],
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        filename: "staff.html",
        template: "./staff/templates/index.html",
        chunks: ["staff"],
      }),
      new MiniCssExtractPlugin(),
    ],
  },
];
