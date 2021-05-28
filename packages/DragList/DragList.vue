<template>
	<transition-group class="x-drag-list" name="x-drag-list" tag="div">
		<div
			v-for="(item, index) in value"
			:key="item.id || item"
			:class="[itemClassName, { 'is-selected': selectIndex === index }]"
			class="x-drag-list-item"
			draggable
			@dragstart="onDragStart(index)"
			@dragenter="onDragEnter(index)"
			@dragend="onDragEnd"
		>
			{{ item.label || item }}
		</div>
	</transition-group>
</template>

<script lang='ts'>
/**
 * 拖拽排序的列表
 * @property {Array} value 列表数据
 * @property {String} itemClassName 列表项类名，用于覆盖默认样式
 */
interface DragListItem {
	id: string;
	label: string | number;
	[prop: string]: unknown;
}
import { Vue, Component, Prop, Model } from 'vue-property-decorator';

@Component({ name: 'XDragList' })
export default class XDragList extends Vue {
	public static entryName = 'XDragList';

	@Model('update:value', { type: Array, required: true })
	value!: Array<string | number | DragListItem>;
	@Prop({ type: String, default: 'x-drag-list-item--default' })
	public itemClassName!: string;

	// 选中项的index
	selectIndex: number | null = null;
	// 进入元素的index
	enterIndex: number | null = null;

	/**
	 * 鼠标按下，拖动开始
	 * @param {number} index 拖动元素的index
	 */
	onDragStart(index: number): void {
		this.selectIndex = index;
	}

	/**
	 * 拖动的元素进入该元素
	 * @param {number} index 进入的元素的index
	 */
	onDragEnter(index: number): void {
		this.enterIndex = index;
		//交换元素位置
		[this.value[this.selectIndex as number], this.value[this.enterIndex]] = [
			this.value[this.enterIndex],
			this.value[this.selectIndex as number]
		];
		[this.selectIndex, this.enterIndex] = [this.enterIndex, null];
	}

	/**
	 * 拖动结束
	 */
	onDragEnd(): void {
		this.selectIndex = null;
		this.enterIndex = null;
	}
}
</script>

<style lang='less' scoped>
.x-drag-list-move {
	transition: all 0.5s ease;
}
.x-drag-list {
	&:hover {
		overflow-y: overlay;
	}
	.x-drag-list-item {
		cursor: pointer;
		user-select: none;
		opacity: 1;
		&.is-selected {
			box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
			z-index: 999;
			background: #f1f3f4;
		}
	}
	.x-drag-list-item--default {
		padding: 10px;
		min-width: 50px;
		border: 1px dashed #eee;
		& + .x-drag-list-item--default {
			margin-top: 5px;
		}
	}
}
</style>