<template>
	<ul class="menu">
		<router-link
			custom
			class="menu-item"
			v-slot="{ navigate }"
			v-for="menu in menus"
			:key="menu.name"
			:to="`/components/${menu.path}`"
		>
			<li @click="navigate" role="link">{{ menu.meta.text }}</li>
		</router-link>
	</ul>
</template>

<script lang='ts'>
import { Vue, Component } from 'vue-property-decorator';
import { RouteConfig } from 'vue-router';
import { componentsList } from '@/router/routes';

@Component({ name: 'Menu' })
export default class Menu extends Vue {
	menus: RouteConfig[] = componentsList;
}
</script>

<style lang='less' scoped>
.menu {
	.flex(column, @j: flex-start, @a: flex-start);
	.size(auto);
	padding: 0 15px;
	min-width: 200px;
	&-item {
		.size(@h: auto);
		list-style: none;
		text-align: left;
		cursor: pointer;
		padding: 15px 0;
	}
}
</style>