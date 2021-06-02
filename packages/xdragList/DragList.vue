<template>
	<ul class="x-drag-list">
		<slot></slot>
	</ul>
</template>

<script lang='ts'>
import { Vue, Component } from 'vue-property-decorator';

@Component({ name: 'XDragList' })
export default class XDragList extends Vue {
	public static entryName = 'XDragList';
}
</script>

<style lang='less' scoped>
</style>