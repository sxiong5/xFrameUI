<template>
	<li class="x-drag-item" @mousedown.stop="handleMouseDown" :style="{ opacity }">
		<slot></slot>
	</li>
</template>

<script lang='ts'>
import { Vue, Component, Inject, Prop } from 'vue-property-decorator';
import { Axis } from 'packages/DragList/DragList.vue';

@Component({ name: 'XDragItem' })
export default class XDragItem extends Vue {
	public static entryName = 'XDragItem';

	@Prop({ type: Number, required: true })
	index!: number;
	@Inject('dragList')
	readonly dragList: any;

	protected dragger!: HTMLElement;
	protected opacity = 1;
	protected clickPosition: Axis = { x: NaN, y: NaN };
	protected targetPosition: Axis = { x: NaN, y: NaN };
	protected parentNode!: HTMLElement;

	mounted() {
		this.parentNode = (document.querySelector(this.dragList.appendTo as string) as HTMLElement) ?? this.$parent.$el;
	}

	handleMouseDown(event: MouseEvent) {
		const clonedNode: HTMLElement = this.$el.cloneNode(true) as HTMLElement;
		const { offsetHeight, offsetWidth, className } = this.$el as HTMLElement;
		// const margin = getMargin(this.$el as HTMLElement);
		this.targetPosition = { x: event.clientX - event.offsetX, y: event.clientY - event.offsetY };
		this.clickPosition = { x: event.clientX, y: event.clientY };

		this.dragger = this.parentNode.appendChild(clonedNode);
		this.dragger.style.position = 'fixed';
		this.dragger.style.left = `${this.targetPosition.x}px`;
		this.dragger.style.top = `${this.targetPosition.y}px`;
		this.dragger.style.height = `${offsetHeight}px`;
		this.dragger.style.width = `${offsetWidth}px`;
		this.dragList.activeClass && (this.dragger.className = `${className} ${this.dragList.activeClass}`);

		this.opacity = 0;
		this.dragger.addEventListener('mouseup', this.handleMouseUp);
		document.addEventListener('mousemove', this.handleMouseMove);
	}

	handleMouseMove(event: MouseEvent) {
		const { clientX, clientY } = event;
		const { x, y } = this.clickPosition;
		const offset = {
			x: clientX - x,
			y: clientY - y
		};
		const { lockAxis } = this.dragList;
		const axis = this.dragList.axis as keyof Axis;
		this.dragger.style.transform = `translate(
			${lockAxis && axis === 'x' ? 0 : offset.x}px,
			${lockAxis && axis === 'y' ? 0 : offset.y}px
		)`;

		let nextIndex: number | null = null;
		if (offset[axis] > 0 && this.index !== this.dragList.value.length - 1) {
			nextIndex = this.index + 1;
		} else if (offset[axis] < 0 && this.index !== 0) {
			nextIndex = this.index - 1;
		}

		const reference = axis === 'y' ? (this.$el as HTMLElement).offsetHeight : (this.$el as HTMLElement).offsetWidth;
		if (Math.abs(offset[axis]) >= ~~((reference * 3) / 4)) {
			if (nextIndex) {
				this.dragList.handleSort(this.index, nextIndex);
				this.updatePosition(nextIndex, nextIndex - this.index);
			}
		}
	}

	handleMouseUp() {
		document.removeEventListener('mousemove', this.handleMouseMove);
		this.clickPosition = { x: NaN, y: NaN };
		this.dragger.style.pointerEvents = 'none';
		this.dragger.style.transition = 'all 0.5s ease';
		this.dragger.style.left = `${this.targetPosition.x}px`;
		this.dragger.style.top = `${this.targetPosition.y}px`;
		this.dragger.style.transform = 'translate(0, 0)';
		this.targetPosition = { x: NaN, y: NaN };
		setTimeout(() => {
			this.parentNode?.removeChild(this.dragger);
			this.opacity = 1;
		}, 500);
	}

	updatePosition(newIndex: number, base: number) {
		const { offsetHeight, offsetWidth } = this.dragList.nodes[newIndex].elm;

		this.targetPosition = {
			x: this.targetPosition.x + (this.dragList.axis === 'x' ? offsetWidth * base : 0),
			y: this.targetPosition.y + (this.dragList.axis === 'y' ? offsetHeight * base : 0)
		};
		// TIPS 直接调整dragger的位置会有一个短暂的闪烁效果，后续还需继续优化
		this.dragger.style.left = `${this.targetPosition.x}px`;
		this.dragger.style.top = `${this.targetPosition.y}px`;
		this.clickPosition = {
			x: this.clickPosition.x + (this.dragList.axis === 'x' ? offsetWidth * base : 0),
			y: this.clickPosition.y + (this.dragList.axis === 'y' ? offsetHeight * base : 0)
		};
	}
}
</script>

<style lang='less' scoped>
.x-drag-item {
	.border-box;
	list-style: none;
}
</style>