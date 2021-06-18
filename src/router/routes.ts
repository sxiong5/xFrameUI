import { convertName } from '@/utils';
import { RouteConfig } from 'vue-router';

/**
 * import routes automatically
 */
const docs = (): RouteConfig[] => {
	const paths = require.context('@/docs', true, /.md/);

	const docRoutes = paths.keys().map(item => {
		const name = (<RegExpMatchArray>item.match(/\/(.+)\.md/))[1];
		return {
			path: convertName(name),
			name,
			component: () => import(/* webpackChunkName: "components" */ `@/docs/${name}.md`)
		} as RouteConfig;
	});

	return docRoutes;
};

const routes: RouteConfig[] = [
	{
		path: '/home',
		name: 'Home',
		component: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue')
	},
	{
		path: '/components',
		name: 'Components',
		redirect: '/components/button',
		component: () => import(/* webpackChunkName: "components" */ '@/views/Components/Index.vue'),
		children: docs()
	},
	{
		path: '/',
		redirect: 'home'
	}
];

export default routes;
