const path = require("path");
const Dotenv = require("dotenv-webpack");

const mode =
  process.env.NODE_ENV === "production" ? "production" : "development";

console.log("mode: ", mode);

module.exports = {
  mode,
  entry: path.resolve(__dirname, "./src/index.jsx"),
  devtool: "source-map",
  output: {
    path: path.join(__dirname, "./dist"),
    clean: true,
  },
  devServer: {
    port: 3000,
    static: true,
    historyApiFallback: true,
    open: true,
  },
  plugins: [
    new Dotenv({
      path: path.resolve(__dirname, `./.env.${mode}`),
    }),
  ],
};
