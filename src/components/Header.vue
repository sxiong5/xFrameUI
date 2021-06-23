<template>
	<header class="home-header">
		<router-link to="/home">
			<img class="header-logo" :src="require('@/assets/images/header-logo.png')" />
		</router-link>
		<div class="header-menu">
			<router-link
				v-for="menu in menus"
				:key="menu.text"
				:class="{ 'is-selected': currentPath === menu.path }"
				:to="menu.path"
				class="menu-item"
			>
				{{ menu.text }}
			</router-link>
		</div>
		<div></div>
	</header>
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
		{ text: 'Components', path: '/components' }
	];

	get currentPath() {
		const path = this.$route.path.split('/');
		return `/${path[1]}`;
	}
}
</script>

<style lang='less' scoped>
.home-header {
	.size(90%, 50px);
	.flex(@j: space-between);
	background: @theme-dblue;
	padding: 20px 5%;
	text-align: center;
	& > div,
	& > a {
		width: calc(100% / 3);
	}
	.header-logo {
		width: 40%;
	}
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