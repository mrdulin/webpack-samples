const webpack = require('webpack');
const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

const paths = {
	src: path.join(__dirname, 'src'),
	dist: path.join(__dirname, 'dist')
};

module.exports = {
	entry: {
		app: paths.src + '/app.js'
	},

	output: {
		filename: '[name].[hash].js',
		path: paths.dist
	},

	externals: {
		//key是require时传入的模块标识
		//value表示的是如何在global（即window）中访问到该对象，例如jQuery, Chart, React, ReactDOM
		jquery: 'jQuery',
		Chart: 'Chart'
	},

	plugins: [
		new htmlWebpackPlugin({
			template: paths.src + '/index.html',
			filename: 'index.html'
		})
	]
}
