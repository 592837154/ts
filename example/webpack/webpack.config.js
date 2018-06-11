// 配置
module.exports = {
	// 入口文件
	entry: './js/app.js',
	// 发布文件
	output: {
		filename: './dest/ickt.js'
	},
	// 定义加载机
	module: {
		loaders: [
			// 编译es6
			{
				test: /\.js$/,
				loader: 'babel-loader?presets[]=es2015'
				// query: 
			}
		]
	}
}