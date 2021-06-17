<template>
	<div class="nav">
		<Instruction />
		<Menu />
	</div>
</template>

<script lang='ts'>
import { Vue, Component } from 'vue-property-decorator';
import Instruction from './Instruction.vue';
import Menu from './Menu.vue';

@Component({ name: 'Nav', components: { Instruction, Menu } })
export default class Nav extends Vue {}
</script>

<style lang='less' scoped>
.nav {
	.flex(column, @j: flex-start, @a: flex-start);
	.size(auto);
	.none-select;
	padding: 20px 15px;
	min-width: 200px;
	border-right: @border;
}
</style>