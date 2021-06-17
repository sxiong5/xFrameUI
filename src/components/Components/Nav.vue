<template>
	<div class="nav">
		<!-- <ul class="main-info">
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
		</ul> -->
		<Menu />
	</div>
</template>

<script lang='ts'>
import { Vue, Component } from 'vue-property-decorator';
import Menu from './Menu.vue';

@Component({ name: 'Nav', components: { Menu } })
export default class Nav extends Vue {}
</script>

<style lang='less' scoped>
.nav {
	.flex(column, @j: flex-start, @a: flex-start);
	.size(auto);
	padding: 0 15px;
	min-width: 200px;
	border-right: @border;
	.main-info {
		border-radius: @radius;
		background: @theme-dblue;
		color: #fff;
	}
}
</style>