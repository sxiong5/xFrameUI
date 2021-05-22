<template>
	<transition-group class="drag-list" name="flip-list" tag="div">
		<div
			v-for="(item, index) in value"
			:key="item.id || item"
			:class="[itemClassName, { 'is-selected': selectIndex === index }]"
			class="drag-list-item"
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
interface IDataItem {
	id: string;
	label: string;
	[prop: string]: unknown;
}
import { Vue, Component, Prop, Model } from 'vue-property-decorator';

@Component({ name: 'XDragList' })
export default class XDragList extends Vue {
	public static entryName = 'XDragList';

	@Model('update:value', { type: Array, required: true })
	value!: Array<string | number | IDataItem>;
	@Prop({ type: String, default: 'default-drag-list-item' })
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
.flip-list-move {
	transition: all 0.5s ease;
}
.drag-list {
	width: 100%;
	height: 100%;
	overflow: hidden;
	border: 1px solid #dcdfe6;
	padding: 5px;
	position: relative;
	&:hover {
		overflow-y: overlay;
	}
	.drag-list-item {
		cursor: pointer;
		user-select: none;
		opacity: 1;
		&.is-selected {
			box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
			z-index: 999;
			background: #f1f3f4;
		}
	}
	.default-drag-list-item {
		padding: 10px;
		border: 1px dashed #eee;
		& + .default-drag-list-item {
			margin-top: 5px;
		}
	}
}
</style>