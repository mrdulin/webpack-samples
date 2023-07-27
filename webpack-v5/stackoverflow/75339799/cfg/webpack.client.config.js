const path = require('path');

const NODE_ENV = process.env.NODE_ENV;

module.exports = {
	mode: NODE_ENV ? NODE_ENV : 'development',
	entry: path.resolve(__dirname, '../src/client/index.js'),
	output: {
		path: path.resolve(__dirname, '../dist/client'),
		filename: 'client.js',
	},
};
