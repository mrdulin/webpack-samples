const webpack = require('webpack');
const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const cleanWebpackPlugin = require('clean-webpack-plugin');

const paths = {
	src: path.join(__dirname, 'src'),
	dist: path.join(__dirname, 'dist')
};

module.exports = {
	entry: {
		app: paths.src + '/index.js'
	},

	output: {
		filename: '[name].[chunkhash:8].js',
		path: paths.dist,
        pathinfo: true
	},

    module: {
        loaders: [
            {
                test: /\.js|jsx$/,
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    presets: ['es2015', 'react'],
                    babelrc: false,
                    cacheDirectory: true
                }
            }
        ]
    },

	externals: {
        //key是项目代码中需要require的地方的库名, value是每个库使用script标签添加到html后对外暴露的全局变量的名字，可以通过浏览器console查看
        'react': 'React',
        'react-dom': 'ReactDOM',
        'react-router': 'ReactRouter'
    },

	plugins: [
        new cleanWebpackPlugin(paths.dist, {
			root: __dirname,
			verbose: true,
			dry: false
		}),
		new htmlWebpackPlugin({
			template: paths.src + '/index.html'
		})
	]
}
