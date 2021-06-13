import hljs from 'highlight.js';
import 'highlight.js/styles/googlecode.css';
import Vue from 'vue';

Vue.directive('highlight', (el: HTMLElement) => {
	const blocks = <NodeListOf<HTMLElement>>el.querySelectorAll('pre code');
	console.log(blocks);

	blocks.forEach((block: HTMLElement) => {
		hljs.highlightBlock(block);
	});
});
