const path = require("path");

module.exports = {
  // mode: 'development',
  entry: {
    scriptone: "./src/scriptone.js",
    scripttwo: "./src/scripttwo.js",
  },
  output: {
    clean: true,
    filename: "[name].js",
    path: path.resolve(__dirname, "dist"),
  },
};
