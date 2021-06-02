<template>
	<transition-group class="x-drag-list" name="x-drag-list" tag="ul">
		<slot></slot>
	</transition-group>
</template>

<script lang='ts'>
/**
 * @property {Array} value 绑定数组
 * @property {String} appendTo 将拖拽元素添加到某节点 默认#app
 * @property {String} activeClass 拖拽元素的样式类
 * @property {Boolean} lockAxis 限制拖拽元素在容器内移动
 *
 * @event change value顺序改变时触发
 */
import { Vue, Component, Model, Prop, Provide, Emit } from 'vue-property-decorator';

@Component({ name: 'XDragList' })
export default class XDragList extends Vue {
	public static entryName = 'XDragList';

	@Model('emitChange', { type: Array, required: true })
	value!: unknown[];
	@Prop({ type: String, default: '#app' })
	appendTo!: string;
	@Prop({ type: String })
	activeClass!: string;
	@Prop({ type: Boolean, default: false })
	lockAxis!: boolean;

	handleSort(preIndex: number, targetIndex: number) {
		const temp = this.value[preIndex];
		this.$set(this.value, preIndex, this.value[targetIndex]);
		this.$set(this.value, targetIndex, temp);
		this.emitChange();
	}

	mounted() {
		setTimeout(() => this.handleSort(2, 4), 2000);
	}

	@Emit('change')
	emitChange() {
		return this.value;
	}

	@Provide('dragList')
	dragList = {
		...this.$props,
		handleSort: this.handleSort
	};
}
</script>

<style lang="less">
.x-drag-list-move {
	transition: all 0.5s ease;
}
</style>
<style lang='less' scoped>
.x-drag-list {
	.none-select;
	margin: 0;
	padding: 0;
	background-color: #f3f3f3;
	border: 1px solid #efefef;
}
</style>