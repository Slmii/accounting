const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        app: './src/reactCode.js'
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            title: 'Accounting'
        })
    ],
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public')
    },
    module: {
		// WHEN A FILE MEETS THE CRITERIA, THEN RUN THE LOADER
		// IN THIS CASE, LOOK FOR ALL JS FILES AND USE BABEL TO CONVERT REACT AND JSX TO ES5
		rules: [{
			loader: 'babel-loader',
			test: /\.js$/,
			exclude: /node_modules/
		},
		// IN THIS CASE, LOOK FOR ALL SCSS FILES AND USE LOADERS TO CONVERT TO CSS 
		{
			test: /\.s?css$/,
			use: [
				{ loader: 'style-loader' },
				{ loader: 'css-loader' },
				{ loader: 'sass-loader' }
			]
		}]
	},
	// TYPE OF SOURCEMAP TO EHNACE THE DEBUGGING
	devtool: 'cheap-module-eval-source-map',
	// ALWAYS GETS THE PUBLIC FOLDER WITH THE JS AND INDEX.HTML FILES LOCATED. THIS AUTOMATICALLY RUNS THE INDEX.HTML FILE
	devServer: {
		contentBase: path.join(__dirname, 'public'),
		// TELLS THE SERVER THAT WE WILL HANDLE ROUTING VIA CLIENT SIDE
		historyApiFallback: true
	}
};