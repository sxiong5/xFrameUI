import { PluginObject, VueConstructor } from 'vue';

interface Component {
	[prop: string]: VueConstructor;
}

const paths = require.context('./', true, /index.ts/);

const components: Component = {};
paths.keys().forEach(item => {
	const res = item.match(/\.\/(.+)\/index\.ts$/);
	res && (components[res[1]] = paths(item).default);
});

const globalComponents: PluginObject<Vue> = {
	...components,
	install: (Vue: VueConstructor) => {
		Object.keys(components).forEach(item => Vue.component(components[item].entryName, components[item]));
	}
};

export default globalComponents;
