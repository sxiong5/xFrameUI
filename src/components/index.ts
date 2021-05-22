import { VueConstructor } from 'vue';
import XDragList from './XDragList/index';

interface Component {
	[prop: string]: unknown;
	install: (Vue: VueConstructor) => void;
}

const components = [XDragList];

const install = (Vue: VueConstructor) => {
	components.forEach(component => Vue.component(component.entryName, component));
};

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
	install(window.Vue);
}

export default {
	install,
	XDragList
} as Component;
