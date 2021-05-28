import { RouteConfig } from 'vue-router';

const routes: RouteConfig[] = [
	{
		path: '/home',
		name: 'Home',
		component: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue')
	},
	{
		path: '/',
		redirect: 'home'
	}
];

export default routes;
