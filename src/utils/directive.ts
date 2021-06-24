import hljs from 'highlight.js';
import 'highlight.js/styles/googlecode.css';
import Vue from 'vue';

Vue.directive('highlight', (el: HTMLElement) => {
	const blocks = <NodeListOf<HTMLElement>>el.querySelectorAll('pre code');

	hljs.addPlugin({
		'before:highlight': res => {
			res.code = (<string>res.code)
				.replace(/^\s+/, '')
				.replaceAll('\t', '  ')
				.replace(/\s+$/, '');
			return res;
		}
	});

	hljs.configure({ ignoreUnescapedHTML: true });

	blocks.forEach((block: HTMLElement) => {
		hljs.highlightElement(block);
	});
});
