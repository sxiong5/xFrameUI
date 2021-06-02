<template>
	<li class="x-drag-item">
		<slot></slot>
	</li>
</template>

<script lang='ts'>
import { Vue, Component } from 'vue-property-decorator';

@Component({ name: 'XDragItem' })
export default class XDragItem extends Vue {
	public static entryName = 'XDragItem';
}
</script>

<style lang='less' scoped>
</style>