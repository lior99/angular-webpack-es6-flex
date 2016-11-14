module.exports = {
	entry : `${__dirname}/src/main.js`,
	output : {
		path : `${__dirname}/build`,
		filename : 'bundle.js'
	},
	module : {
		loaders : [
			{
				test : /\.js$/,
				exclude : /node_modules/,
				loader:'babel',
				query: {
					 presets : ['es2015']
				} 
			}
		]
	},
	devServer: {
	    //contentBase: "./src",
	    noInfo: false,
	    hot: true
  },

  // support source maps
  devtool: "#inline-source-map"
}