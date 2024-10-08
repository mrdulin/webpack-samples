const path = require("path");

module.exports = {
  entry: path.resolve(__dirname, "../src/index.jsx"),
  resolve: {
    extensions: ["*", ".js", ".jsx"],
  },
};
