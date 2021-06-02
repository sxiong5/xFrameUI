import { RouteConfig } from 'vue-router';

const routes: RouteConfig[] = [
	{
		path: '/home',
		name: 'Home',
		component: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue')
	},
	{
		path: '/components',
		name: 'Components',
		component: () => import(/* webpackChunkName: "components" */ '@/views/Components/Index.vue')
	},
	{
		path: '/',
		redirect: 'home'
	}
];

export default routes;
