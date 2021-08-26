const path = require("path");
const util = require("util");
const express = require("express");
const webpack = require("webpack");
const webpackDevMiddleware = require("webpack-dev-middleware");
const { createFsFromVolume, Volume } = require("memfs");
const webpackConfig = require("./webpack.config");

const compiler = webpack(webpackConfig);
const app = express();
const fs = createFsFromVolume(new Volume());
fs.join = path.join.bind(path);
const readFile = util.promisify(fs.readFile);

const middleware = webpackDevMiddleware(compiler, {
  publicPath: webpackConfig.output.publicPath,
  stats: "errors-only",
  outputFileSystem: fs,
});
app.use(middleware);

app.get("*", async (req, res) => {
  try {
    const file = await readFile(path.join(compiler.outputPath, "index.html"));
    res.send(file.toString());
  } catch (error) {
    res.sendStatus(404);
  }
});

app.listen(3000, () => console.log("Example app listening on port 3000!"));
