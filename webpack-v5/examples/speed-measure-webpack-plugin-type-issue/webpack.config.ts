import path from 'path';
import webpack from 'webpack';
import SpeedMeasurePlugin from 'speed-measure-webpack-plugin';

const config: webpack.Configuration = {
	mode: 'production',
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		clean: true,
	},
};

const smp = new SpeedMeasurePlugin();

export default smp.wrap(config);
