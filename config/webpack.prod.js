'use strict';
var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	entry: [
		'babel-polyfill',
		path.join(__dirname, '../src/index.js')
	],
	output: {
		path: path.join(__dirname, '../dist/'),
		filename: '[name].min.js',
		publicPath: ''
	},
	plugins: [
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify('production')
		}),
		new webpack.optimize.OccurrenceOrderPlugin(),
		new HtmlWebpackPlugin({
			template: 'src/index.html',
			inject: 'body',
			filename: 'index.html'
		}),
		new ExtractTextPlugin('[name].min.css'),
		new webpack.optimize.UglifyJsPlugin({
			compressor: {
				warnings: false,
				screw_ie8: true
			}
		})
	],
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				enforce: "pre",
				exclude: /node_modules/,
				loader: "eslint-loader",
				options: {
					configFile: '.eslintrc',
					failOnWarning: false,
					failOnError: false
				}
			},
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
				options: {
					presets: ['react', 'es2015', 'stage-2']
				}
			},
			{
				test: /\.css$/,
				use: ExtractTextPlugin.extract({
          loaders: [
            'style-loader?sourceMap',
            'css-loader?modules=true&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]',
            'postcss-loader'
          ]
        })
			},
			{
				test: /\.scss$/,
				use: ExtractTextPlugin.extract({
          loaders: [
            'style-loader',
            'css-loader?modules=true&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]',
            'sass-loader?sourceMap',
            'postcss-loader'
          ]
        })
			},
		]
	}
};
