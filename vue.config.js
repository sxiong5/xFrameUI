const path = require('path');

// 不能用const
let mdConfig = require('./src/md-loader/index.ts');

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
			.use('vue-markdown-loader')
			.loader('vue-markdown-loader/lib/markdown-compiler')
			.options(mdConfig);
	},

	pluginOptions: {
		'style-resources-loader': {
			preProcessor: 'less',
			patterns: [path.resolve(__dirname, 'src/assets/style/global.less')]
		}
	}
};
