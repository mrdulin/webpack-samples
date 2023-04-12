const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const fs = require("fs");

let proxyOptions = require("./config/proxy");

fs.watch("./config/proxy.js", () => {
  delete require.cache[require.resolve("./config/proxy")];
  try {
    proxyOptions = require("./config/proxy");
    console.info("Proxy reload success");
  } catch (error) {
    console.error("Proxy reload failed. Error:", error);
  }
});

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "bundle.js",
  },
  mode: "development",
  plugins: [new HtmlWebpackPlugin({ template: "./src/index.html" })],
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
    port: 9000,
    // not working
    // proxy: [() => proxyOptions],

    // not working
    // proxy: [
    //   () =>
    //     Object.keys(proxyOptions).map((context) => ({
    //       context,
    //       ...proxyOptions[context],
    //     })),
    // ],

    // works
    proxy: Object.keys(proxyOptions).map((context) => () => ({
      context,
      ...proxyOptions[context],
    })),
  },
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
