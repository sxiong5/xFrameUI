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

	chainWebpack: config => {
		config.plugin('html').tap(args => {
			args[0].title = 'xFrame - A Vue.js 2.x UI Lib for Web';
			return args;
		});
		config.module
			.rule('md')
			.test(/\.md$/)
			.use('vue-loader')
			.loader('vue-loader')
			.end()
			.use('md-loader')
			.loader(path.resolve(__dirname, 'src/md-loader/index.ts'));
	},

	pluginOptions: {
		'style-resources-loader': {
			preProcessor: 'less',
			patterns: [
				path.resolve(__dirname, 'src/assets/style/global.less'),
				path.resolve(__dirname, 'src/assets/style/scroll.less'),
				path.resolve(__dirname, 'src/assets/style/docs.less')
			]
		}
	}
};
