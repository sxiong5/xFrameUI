<template>
	<ul class="menu">
		<div class="menu-category col-layout" v-for="category in MENU_LIST" :key="category.category">
			<label class="menu-category-label">{{ category.category }}</label>
			<router-link
				custom
				class="menu-item"
				v-slot="{ navigate }"
				v-for="menu in category.children"
				:key="menu.text"
				:to="`/components/${menu.path}`"
			>
				<li @click="navigate" role="link">{{ menu.text }}</li>
			</router-link>
		</div>
	</ul>
</template>

<script lang='ts'>
import { Vue, Component } from 'vue-property-decorator';
import MENU from './menu';

@Component({ name: 'Menu' })
export default class Menu extends Vue {
	MENU_LIST = MENU;
}
</script>

<style lang='less' scoped>
.menu {
	.flex(column, @j: flex-start, @a: flex-start);
	.size(auto);
	padding: 0 15px;
	min-width: 200px;
	&-category-label {
		color: darken(@theme-gray, 15);
	}
	&-item {
		.size(@h: auto);
		list-style: none;
		text-align: left;
		cursor: pointer;
		padding: 15px 0;
	}
}
</style>