'use strict';

var webpack = require('webpack')
var path = require('path')

module.exports = () => {
	return {
		mode: 'development',
	
		entry: {
			app: path.resolve(__dirname, './src/index.ts'),
		},
		output: {
			path: path.resolve(__dirname, './dist'),
			filename: './index.js',
			library: 'Package2',
			libraryTarget: 'umd',
			clean: true,
		},
	
		devtool: 'source-map',
	
		resolve: {
			extensions: ['.ts', '.js'],
		},

		module: {
			rules: [{
				test: /\.ts$/,
				loader: 'ts-loader',
				options: {
					compilerOptions: {
						noEmit: false,
						outDir: './dist',
						declaration: true,
					},
				},
			}]
		},
	}
};
