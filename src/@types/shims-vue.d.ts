declare module '*.vue' {
	import Vue from 'vue';
	export default Vue;
}

declare module 'vue' {
	interface VueConstructor {
		[prop: string]: any;
		entryName?: string;
	}
}
