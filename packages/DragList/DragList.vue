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
 * @property {String} axis 定义主轴
 * @property {Boolean} lockAxis 锁定主轴 限制拖拽元素在容器内移动
 *
 * @event change value顺序改变时触发
 */
import { Vue, Component, Model, Prop, Provide, Emit } from 'vue-property-decorator';

export interface Axis {
	x: number;
	y: number;
}

@Component({ name: 'XDragList' })
export default class XDragList extends Vue {
	public static entryName = 'XDragList';

	@Model('emitChange', { type: Array, required: true })
	value!: unknown[];
	@Prop({ type: String, default: '#app' })
	appendTo!: string;
	@Prop({ type: String })
	activeClass!: string;
	@Prop({
		type: String,
		default: 'y',
		validator(value) {
			return ['x', 'y'].includes(value);
		}
	})
	axis!: keyof Axis;
	@Prop({ type: Boolean, default: false })
	lockAxis!: boolean;

	handleSort(curIndex: number, nextIndex: number) {
		const temp = this.value[curIndex];
		this.$set(this.value, curIndex, this.value[nextIndex]);
		this.$set(this.value, nextIndex, temp);

		this.emitChange();
	}

	@Emit('change')
	emitChange() {
		return this.value;
	}

	@Provide('dragList')
	dragList = {
		...this.$props,
		nodes: this.$slots.default,
		handleSort: this.handleSort
	};
}
</script>

<style lang="less">
.x-drag-list-move {
	transition: all 0.3s ease-out;
}
</style>
<style lang='less' scoped>
.x-drag-list {
	.none-select;
	margin: 0;
	padding: 0;
}
</style>