import { VueConstructor } from 'vue';
import Button from './Button';
import DragList from './DragList';
import DragItem from './DragItem';

interface Component {
	[prop: string]: unknown;
	install: (Vue: VueConstructor) => void;
}

const components = [Button, DragList, DragItem];

const install = (Vue: VueConstructor) => {
	components.forEach(component => Vue.component(component.entryName, component));
};

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
	install(window.Vue);
}

export default {
	Button,
	DragList,
	DragItem,
	install
} as Component;
