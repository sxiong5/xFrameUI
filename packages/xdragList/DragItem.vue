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
	opacity = 1;
	protected position = { x: NaN, y: NaN };
	protected target!: HTMLElement;

	mounted() {
		this.target = (document.querySelector(this.dragList.appendTo as string) as HTMLElement) ?? this.$parent.$el;
	}

	handleMouseDown(event: MouseEvent) {
		const cloneNode: HTMLElement = this.$el.cloneNode(true) as HTMLElement;
		const { clientHeight, clientWidth, className } = this.$el as HTMLElement;
		// const margin = getMargin(this.$el as HTMLElement);
		this.position = { x: event.clientX, y: event.clientY };

		this.dragger = this.target.appendChild(cloneNode);
		this.dragger.style.position = 'fixed';
		this.dragger.style.left = `${this.position.x - event.offsetX}px`;
		this.dragger.style.top = `${this.position.y - event.offsetY}px`;
		this.dragger.style.height = `${clientHeight}px`;
		this.dragger.style.width = `${clientWidth}px`;
		this.dragList.activeClass && (this.dragger.className = `${className} ${this.dragList.activeClass}`);

		this.dragger.addEventListener('mouseup', this.handleMouseUp);
		this.opacity = 0;
		document.addEventListener('mousemove', this.handleMouseMove);
	}

	handleMouseMove(event: MouseEvent) {
		const { clientX, clientY } = event;
		const offset = {
			x: clientX - this.position.x,
			y: clientY - this.position.y
		};
		this.dragger.style.transform = `translate(${this.dragList.lockAxis ? 0 : offset.x}px, ${offset.y}px)`;
	}

	handleMouseUp() {
		document.removeEventListener('mousemove', this.handleMouseMove);
		this.position = { x: NaN, y: NaN };
		this.dragger.style.pointerEvents = 'none';
		this.dragger.style.transition = 'all 0.5s ease';
		this.dragger.style.transform = 'translate(0, 0)';
		setTimeout(() => {
			this.target?.removeChild(this.dragger);
			this.opacity = 1;
		}, 500);
	}
}
</script>

<style lang='less' scoped>
.x-drag-item {
	.border-box;
	list-style: none;
}
</style>