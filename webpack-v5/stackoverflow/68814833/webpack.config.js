const path = require("path");

module.exports = {
  entry: "./app/index.js",
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "",
    assetModuleFilename: (pathData) => {
      const filepath = path
        .dirname(pathData.filename)
        .split("/")
        .slice(1)
        .join("/");
      return `${filepath}/[name].[hash][ext]`;
    },
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /\.png/,
        type: "asset/resource",
      },
    ],
  },
};
