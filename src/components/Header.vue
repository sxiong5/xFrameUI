<template>
	<div class="home-header">
		<div></div>
		<div class="header-menu">
			<router-link
				v-for="menu in menus"
				:key="menu.text"
				:class="{ 'is-selected': $route.path === menu.path }"
				:to="menu.path"
				class="menu-item"
			>
				{{ menu.text }}
			</router-link>
		</div>
		<div></div>
	</div>
</template>

<script lang='ts'>
import { Vue, Component } from 'vue-property-decorator';

interface HeaderMenu {
	text: string;
	path: string;
}

@Component({ name: 'HomeHeader' })
export default class HomeHeader extends Vue {
	menus: HeaderMenu[] = [
		{ text: 'Home', path: '/home' },
		{ text: 'Guide', path: '' },
		{ text: 'Components', path: '' }
	];
}
</script>

<style lang='less' scoped>
.home-header {
	.size(calc(100% - 300px), 50px);
	.flex(@j: space-between);
	background: @theme-dblue;
	padding: 20px 150px;
	.header-menu {
		.menu-item {
			color: fade(@theme-white, 50);
			cursor: pointer;
			font-size: @font18;
			text-decoration: none;
			&:hover,
			&.is-selected {
				color: @theme-white;
			}
			& + .menu-item {
				margin-left: 50px;
			}
		}
	}
}
</style>