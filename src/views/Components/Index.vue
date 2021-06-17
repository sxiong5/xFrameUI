<template>
	<div class="index">
		<Nav />
		<div class="view">
			<router-view />
		</div>
	</div>
</template>

<script lang='ts'>
import { Vue, Component } from 'vue-property-decorator';
import Nav from '@/components/Components/Nav.vue';

@Component({ name: 'ComponentIndex', components: { Nav } })
export default class ComponentIndex extends Vue {
	arr: number[] = [1, 2, 3, 4, 5, 6, 7, 8];
}
</script>

<style lang='less' scoped>
.index {
	.flex(@j: space-between, @a: flex-start);
	height: calc(100vh - 130px);
	padding: 20px 5%;
	.view {
		.size();
		flex-grow: 1;
		padding: 0 50px;
		text-align: left;
		overflow-y: overlay;
	}
}
</style>