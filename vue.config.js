const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	publicPath: './',
	assetsDir: 'assets',
	outputDir: 'dist',
	productionSourceMap: false,

	configureWebpack: {
		resolve: {
			extensions: ['.js', '.vue', '.json', '.ts', '.tsx'] // 加入ts 和 tsx
		}
	}

	// chainWebpack: config => {
	// 	// 更改tab页标题
	// 	config.plugin('html').tap(args => {
	// 		args[0].title = 'xFrame - A Vue.js 2.x UI Lib for Web';
	// 		return args;
	// 	});
	// },

	// pwa: {
	// 	iconPaths: {
	// 		favicon32: 'favicon.ico',
	// 		favicon16: 'favicon.ico',
	// 		appleTouchIcon: 'favicon.ico',
	// 		maskIcon: 'favicon.ico',
	// 		msTileImage: 'favicon.ico'
	// 	}
	// }
};
