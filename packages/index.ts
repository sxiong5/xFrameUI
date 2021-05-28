import { VueConstructor } from 'vue';
import DragList from './DragList';

interface Component {
	[prop: string]: unknown;
	install: (Vue: VueConstructor) => void;
}

const components = [DragList];

const install = (Vue: VueConstructor) => {
	components.forEach(component => Vue.component(component.entryName, component));
};

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
	install(window.Vue);
}

export default {
	DragList,
	install
} as Component;
