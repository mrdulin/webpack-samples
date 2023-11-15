const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	mode: 'development',
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		clean: true,
	},
	devServer: {
		host: '0.0.0.0',
		port: 3000,
		setupMiddlewares: (middlewares, devServer) => {
			if (!devServer) {
				throw new Error('webpack-dev-server is not defined');
			}

			devServer.app.get('/ok', (_, res) => {
				res.json({ code: 0 });
			});

      return middlewares;
		},
	},
	plugins: [new HtmlWebpackPlugin({ template: './src/index.html' })],
};
