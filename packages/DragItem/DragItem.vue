<template>
	<li class="x-drag-item" @mousedown.stop="handleMouseDown" :style="{ opacity }">
		<slot></slot>
	</li>
</template>

<script lang='ts'>
import { Vue, Component, Inject, Prop } from 'vue-property-decorator';

@Component({ name: 'XDragItem' })
export default class XDragItem extends Vue {
	public static entryName = 'XDragItem';

	@Prop({ type: Number, required: true })
	index!: number;
	@Inject('dragList')
	readonly dragList: any;

	protected dragger!: HTMLElement;
	protected opacity = 1;
	protected clickPosition = { x: NaN, y: NaN };
	protected targetPosition = { x: NaN, y: NaN };
	protected parentNode!: HTMLElement;

	mounted() {
		this.parentNode = (document.querySelector(this.dragList.appendTo as string) as HTMLElement) ?? this.$parent.$el;
	}

	handleMouseDown(event: MouseEvent) {
		const cloneNode: HTMLElement = this.$el.cloneNode(true) as HTMLElement;
		const { clientHeight, clientWidth, className } = this.$el as HTMLElement;
		// const margin = getMargin(this.$el as HTMLElement);
		this.targetPosition = { x: event.clientX - event.offsetX, y: event.clientY - event.offsetY };
		this.clickPosition = { x: event.clientX, y: event.clientY };

		this.dragger = this.parentNode.appendChild(cloneNode);
		this.dragger.style.position = 'fixed';
		this.dragger.style.left = `${this.targetPosition.x}px`;
		this.dragger.style.top = `${this.targetPosition.y}px`;
		this.dragger.style.height = `${clientHeight}px`;
		this.dragger.style.width = `${clientWidth}px`;
		this.dragList.activeClass && (this.dragger.className = `${className} ${this.dragList.activeClass}`);

		this.dragger.addEventListener('mouseup', this.handleMouseUp);
		this.opacity = 0;
		document.addEventListener('mousemove', this.handleMouseMove);
	}

	handleMouseMove(event: MouseEvent) {
		const { clientX, clientY, offsetY } = event;
		const offset = {
			x: clientX - this.clickPosition.x,
			y: clientY - this.clickPosition.y
		};
		this.dragger.style.transform = `translate(${this.dragList.lockAxis ? 0 : offset.x}px, ${offset.y}px)`;

		let $index!: number;
		if (offset.y > 0 && this.index !== this.dragList.value.length - 1) {
			$index = this.index + 1;
		} else if (offset.y < 0 && this.index !== 0) {
			$index = this.index - 1;
		}

		if (Math.abs(clientY - offsetY - this.targetPosition.y) === ~~((this.$el.clientHeight * 3) / 4)) {
			if ($index) {
				this.dragList.handleSort(this.index, $index);
				this.updatePosition($index);
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

	updatePosition(newIndex: number) {
		this.targetPosition = {
			x: this.targetPosition.x,
			y: this.targetPosition.y
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