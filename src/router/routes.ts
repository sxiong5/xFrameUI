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
		redirect: '/components/button',
		component: () => import(/* webpackChunkName: "components" */ '@/views/Components/Index.vue'),
		children: [
			{
				path: 'change-log',
				name: 'ChangeLog',
				component: () => import(/* webpackChunkName: "components" */ '@/docs/ChangeLog.md')
			},
			{
				path: 'installation',
				name: 'Installation',
				component: () => import(/* webpackChunkName: "components" */ '@/docs/Installation.md')
			},
			{
				path: 'quick-start',
				name: 'QuickStart',
				component: () => import(/* webpackChunkName: "components" */ '@/docs/QuickStart.md')
			},
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
		]
	},
	{
		path: '/',
		redirect: 'home'
	}
];

export default routes;
