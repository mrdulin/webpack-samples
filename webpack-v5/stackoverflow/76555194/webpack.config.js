const path = require('path');

module.exports = {
	mode: 'production',
	entry: './src/index.ts',
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: 'ts-loader',
				exclude: /node_modules/,
			},
		],
	},
	resolve: {
		extensions: ['.tsx', '.ts', '.js'],
	},
	output: {
		filename: 'index.js',
		path: path.resolve(__dirname, 'dist'),
		clean: true,
	},
	optimization: {
		minimize: true,
		mergeDuplicateChunks: false,
		removeAvailableModules: true,
		usedExports: true,
		concatenateModules: true,
	},
	stats: {
		errorDetails: true,
	},
};
