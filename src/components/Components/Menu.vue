<template>
	<ul class="menu">
		<div class="menu-category" v-for="category in MENU_LIST" :key="category.category">
			<label class="menu-category-label">{{ category.category }}</label>
			<router-link
				custom
				v-slot="{ navigate }"
				v-for="menu in category.children"
				:key="menu.text"
				:to="`/components/${menu.path}`"
			>
				<MenuItem class="menu-item" role="link" :path="`/components/${menu.path}`" @click.native="navigate">
					{{ menu.text }}
				</MenuItem>
			</router-link>
		</div>
	</ul>
</template>

<script lang='ts'>
import { Vue, Component } from 'vue-property-decorator';
import MenuItem from './MenuItem.vue';
import MENU from './menu';

@Component({ name: 'Menu', components: { MenuItem } })
export default class Menu extends Vue {
	MENU_LIST = MENU;
}
</script>

<style lang='less' scoped>
.menu {
	.size;
	padding: 0;
	margin: 0;
	&-category + &-category {
		margin-top: 25px;
	}
	&-category-label {
		display: block;
		color: darken(@theme-gray, 15);
		margin-bottom: 10px;
	}
	&-item {
		list-style: none;
		text-align: left;
		cursor: pointer;
		padding: 15px 10px;
		&.is-checked {
			background: @theme-lblue;
			color: @theme-blue;
			border-radius: @radius;
		}
	}
}
</style>