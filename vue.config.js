module.exports = {
	publicPath: './',
	assetsDir: 'assets',
	outputDir: 'dist',
	productionSourceMap: false,
	css: {
		extract: false
	},
	configureWebpack: {
		resolve: {
			extensions: ['.js', '.vue', '.json', '.ts', '.tsx'] // 加入ts 和 tsx
		}
	}
};
