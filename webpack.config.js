

module.exports = {
	entry : ['babel-polyfill', `${__dirname}/src/main.js`],
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
	    inline:true,
	    hot : true
  	},
  	devtool: "inline-sourcemap"
}