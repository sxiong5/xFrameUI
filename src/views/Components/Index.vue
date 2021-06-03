<template>
	<div class="index">
		<x-drag-list v-model="arr">
			<x-drag-item class="list-item" v-for="(item, index) in arr" :key="item[0]" :index="index">
				<x-drag-list v-model="arr[index]">
					<x-drag-item class="list-item-inside" v-for="(i, idx) in arr[index]" :key="i" :index="idx">
						{{ i }}
					</x-drag-item>
				</x-drag-list>
			</x-drag-item>
		</x-drag-list>

		<List v-model="arr" />
	</div>
</template>

<script lang='ts'>
import { Vue, Component } from 'vue-property-decorator';
import XDragList from '../../../packages/xdragList/DragList.vue';
import XDragItem from '../../../packages/xdragList/DragItem.vue';
import List from '../../../packages/DragList/DragList.vue';

@Component({ name: 'ComponentIndex', components: { XDragList, XDragItem, List } })
export default class ComponentIndex extends Vue {
	arr: number[][] = [
		[1, 2, 3],
		[4, 5, 6],
		[7, 8, 9],
		[10, 11, 12],
		[13, 14, 15],
		[16, 17, 18]
	];
}
</script>

<style lang='less' scoped>
.index {
	width: 50%;
	margin: 20px auto;
}
.list-item {
	padding: 20px 10px;
	background-color: #fff;
	border-bottom: 1px solid #efefef;
}
.list-item-inside {
	padding: 10px;
	background-color: darken(#fff, 10);
	border-bottom: 1px solid #efefef;
}
</style>