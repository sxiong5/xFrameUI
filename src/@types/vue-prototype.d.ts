import { VueConstructor } from 'vue';

declare module 'vue/types/vue' {
	interface VueConstructor {
		entryName: string;
	}
}
