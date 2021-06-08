<template>
	<div class="index">
		<x-drag-list v-model="arr">
			<x-drag-item class="list-item" v-for="(item, index) in arr" :key="item" :index="index">
				{{ item }}
			</x-drag-item>
		</x-drag-list>
	</div>
</template>

<script lang='ts'>
import { Vue, Component } from 'vue-property-decorator';

@Component({ name: 'ComponentIndex' })
export default class ComponentIndex extends Vue {
	arr: number[] = [1, 2, 3, 4, 5, 6, 7, 8];
}
</script>

<style lang='less' scoped>
.index {
	margin: 20px 0;
	overflow-y: overlay;
	height: calc(100vh - 90px);
	padding: 0 356px;
}
.list-item {
	padding: 20px 10px;
	background-color: #fff;
	border-bottom: 1px solid #efefef;
}
</style>