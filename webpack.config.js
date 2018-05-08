// entry point -> output point

const path = require('path');

module.exports = {
	// WHAT FILE TO LOOK FOR
	entry: './src/reactCode.js',
	output: {
		// WHERE TO PUT THE FILE
		path: path.join(__dirname, 'public'),
		filename: 'bundle.js'
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
