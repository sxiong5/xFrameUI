import hljs from 'highlight.js';
import 'highlight.js/styles/googlecode.css';
import Vue from 'vue';

Vue.directive('highlight', (el: HTMLElement) => {
	const blocks = <NodeListOf<HTMLElement>>el.querySelectorAll('pre code');

	blocks.forEach((block: HTMLElement) => {
		hljs.highlightElement(block);
	});
});
