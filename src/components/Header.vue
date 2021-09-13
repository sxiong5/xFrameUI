<template>
	<header class="header">
		<router-link to="/home" v-slot="{ navigate }" custom>
			<div role="link" class="header__logo">
				<img class="header__logo__img" :src="require('@/assets/images/header-logo.png')" @click="navigate" />
			</div>
		</router-link>
		<div class="header__menu">
			<router-link
				v-for="menu in menus"
				:key="menu.text"
				:class="{ 'is-selected': currentPath === menu.path }"
				:to="menu.path"
				class="menu__item"
			>
				{{ menu.text }}
			</router-link>
		</div>
	</header>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

interface HeaderMenu {
	text: string;
	path: string;
}

@Component({ name: 'Header' })
export default class Header extends Vue {
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

<style lang="less">
.header {
	.flex(@j: space-between, @w: wrap);
	padding: 20px 0;
	text-align: center;
	.header__logo__img {
		cursor: pointer;
	}
	.header__menu {
		white-space: nowrap;
		.menu__item {
			color: @theme-blue;
			cursor: pointer;
			font-size: @font18;
			text-decoration: none;
			&:hover,
			&.is-selected {
				color: @theme-dblue;
			}
			& + .menu__item {
				margin-left: 50px;
			}
		}
	}
}
@media (min-width: 768px) {
	.header {
		.size(@h: 50px);
		& > div {
			.size(50%);
			line-height: 50px;
		}
		.header__logo__img {
			height: 100%;
		}
	}
}
@media (max-width: 768px) {
	.header {
		.size(@h: 70px);
		& > div {
			width: 100%;
			line-height: 25px;
		}
		.header__logo {
			height: 35px;
			margin-bottom: 10px;
			&__img {
				height: 100%;
			}
		}
		.header__menu {
			height: 25px;
		}
	}
}
</style>
