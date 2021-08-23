const path = require("path");

module.exports = {
  entry: "./src/demo.js",
  output: {
    path: path.resolve(__dirname, "lib"),
    filename: "demo.js",
    library: {
      name: "demo",
      type: "umd",
    },
    globalObject: "this",
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },
};
