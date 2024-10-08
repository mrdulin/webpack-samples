const path = require('path');

const NODE_ENV = process.env.NODE_ENV;

module.exports = {
	target: 'node',
	mode: NODE_ENV ? NODE_ENV : 'development',
	entry: path.resolve(__dirname, '../src/server/server.js'),
	output: {
		path: path.resolve(__dirname, '../dist/server'),
		filename: 'server.js',
	},
};
