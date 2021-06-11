declare module '*.md' {
	import { VueConstructor } from 'vue/types/umd';
	const content: VueConstructor;
	export default content;
}
