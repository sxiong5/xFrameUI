import { RouteConfig } from 'vue-router';

export const componentsList: RouteConfig[] = [
	{
		path: 'button',
		name: 'Button',
		component: () => import(/* webpackChunkName: "components" */ '@/docs/Button.md')
	},
	{
		path: 'drag-list',
		name: 'DragList',
		component: () => import(/* webpackChunkName: "components" */ '@/docs/DragList.md')
	},
	{
		path: 'folding',
		name: 'Folding',
		component: () => import(/* webpackChunkName: "components" */ '@/docs/Folding.md')
	}
];

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
		children: componentsList
	},
	{
		path: '/',
		redirect: 'home'
	}
];

export default routes;
