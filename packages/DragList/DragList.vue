<template>
	<transition-group class="x-drag__list" name="x-drag__list" tag="ul">
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
 * @event sort-end 排序结束时触发
 */
import { Vue, Component, Model, Prop, Provide, Emit } from 'vue-property-decorator';
import { VNode } from 'vue/types/umd';

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
	@Emit('sort-end')
	emitSortEnd() {
		return this.value;
	}

	@Provide('dragList')
	dragList = {
		...this.$props,
		nodes: this.$slots.default,
		handleSort: this.handleSort,
		emitSortEnd: this.emitSortEnd
	};

	mounted() {
		for (let item of this.$slots.default as VNode[]) {
			if (!item.tag?.includes('XDragItem')) {
				throw new Error('only the <x-drag-item></x-drag-item> can be uses in <x-drag-list></x-drag-list>!');
			}
		}
	}
}
</script>

<style lang='less'>
.x-drag__list-move {
	transition: all 0.3s ease-out;
}
.x-drag__list {
	.none-select;
	margin: 0;
	padding: 0;
}
</style>