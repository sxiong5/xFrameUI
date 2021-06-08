const path = require('path');

module.exports = {
	publicPath: './',
	assetsDir: 'assets',
	outputDir: 'dist',
	productionSourceMap: false,

	configureWebpack: {
		resolve: {
			extensions: ['.js', '.vue', '.json', '.ts', '.tsx']
		}
	},

	// chainWebpack: config => {
	// 	config.plugin('html').tap(args => {
	// 		args[0].title = 'xFrame - A Vue.js 2.x UI Lib for Web';
	// 		return args;
	// 	});
	// },

	pluginOptions: {
		'style-resources-loader': {
			preProcessor: 'less',
			patterns: [path.resolve(__dirname, 'src/assets/style/global.less')]
		}
	}
};
