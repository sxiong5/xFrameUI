import { VueConstructor } from 'vue';

interface _VueConstructor extends VueConstructor {
	entryName: string;
}
interface Component {
	[prop: string]: unknown;
}
interface GloablComponent extends Component {
	install: (Vue: VueConstructor) => void;
}

const paths = require.context('./', true, /index.ts/);

const components: Component = {};
paths.keys().forEach(item => {
	const res = item.match(/\.\/(.+)\/index\.ts$/);
	res && (components[res[1]] = require(`./${res[1]}`).default);
});

const globalComponents: GloablComponent = {
	...components,
	install: (Vue: VueConstructor) => {
		Object.keys(components).forEach(item =>
			Vue.component((<_VueConstructor>components[item]).entryName, <VueConstructor>components[item])
		);
	}
};

export default globalComponents;
