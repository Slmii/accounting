const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

// Create multiple instances
// const extractCSS = new ExtractTextPlugin('styles.css');
// const extractSCSS = new ExtractTextPlugin('stylesheets/[name]-two.css');

module.exports = (env) => {
	// CHECK THE ENVIRONMENT
	const isProduction = (env === 'production');

	return {
		// WHAT FILE TO LOOK FOR
		entry: './src/reactCode.js',
		// WHERE TO PUT THE FILE
		output: {
			path: path.join(__dirname, 'public', 'dist'),
			filename: 'bundle.js'
		},
		cache: true,
		module: {
			// WHEN A FILE MEETS THE CRITERIA, THEN RUN THE LOADER
			// IN THIS CASE, LOOK FOR ALL JS FILES AND USE BABEL TO CONVERT REACT, JSX AND ES6 TO ES5
			rules: [{
				loader: 'babel-loader',
				test: /\.js$/,
				exclude: /node_modules/
			},
			// IN THIS CASE, LOOK FOR ALL SCSS FILES AND USE LOADERS TO CONVERT TO CSS 
			{
				test: /\.s?css$/,
				use: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: [ 
						{
							loader: 'css-loader',
							options: {
								sourceMap: true
							}
						},
						{
							loader: 'sass-loader',
							options: {
								sourceMap: true
							}
						}
					]
				})
			}]
		},
		plugins: [
			new ExtractTextPlugin('styles.css')
		],
		// TYPE OF SOURCEMAP TO EHNACE THE DEBUGGING
		devtool: isProduction ? 'source-map' : 'inline-source-map',
		// ALWAYS GETS THE PUBLIC FOLDER WITH THE JS AND INDEX.HTML FILES LOCATED. THIS AUTOMATICALLY RUNS THE INDEX.HTML FILE
		devServer: {
			contentBase: path.join(__dirname, 'public'),
			// TELLS THE SERVER THAT WE WILL HANDLE ROUTING VIA CLIENT SIDE
			historyApiFallback: true,
			// THE PATH OF THE ASSESTS (BUNDLE)
			publicPath: '/dist/'
		}		
	};
};
