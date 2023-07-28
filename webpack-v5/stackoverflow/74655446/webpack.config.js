const path = require('path');

module.exports = {
	entry: './src/index.js',
	mode: 'production',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'index.js',
		library: { name: 'react-package', type: 'umd' },
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				use: {
					loader: 'babel-loader',
					exclude: /node_modules/,
					options: {
						presets: ['@babel/preset-env', '@babel/preset-react'],
					},
				},
			},
		],
	},
	resolve: {
		extensions: ['.js', '.json', '.jsx'],
	},
	externals: {
		react: 'react',
	},
};
