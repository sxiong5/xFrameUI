<template>
	<li class="x-drag-item" @mousedown="handleMouseDown" :style="{ opacity }">
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

	private dragger!: HTMLElement;
	opacity = 1;
	private position = { x: NaN, y: NaN };
	private target!: HTMLElement;

	mounted() {
		this.target = (document.querySelector(this.dragList.appendTo as string) as HTMLElement) ?? this.$parent.$el;
	}

	/**
	 * 鼠标按下
	 */
	handleMouseDown(event: MouseEvent) {
		const cloneNode: Node = this.$el.cloneNode(true);
		const { clientHeight, clientWidth, offsetTop, offsetLeft, className } = this.$el as HTMLElement;
		// const margin = getMargin(this.$el as HTMLElement);
		this.position = { x: event.clientX, y: event.clientY };

		this.dragger = this.target.appendChild(cloneNode as HTMLElement);
		this.dragger.style.position = 'fixed';
		this.dragger.style.left = `${offsetLeft}px`;
		this.dragger.style.top = `${offsetTop}px`;
		this.dragger.style.height = `${clientHeight}px`;
		this.dragger.style.width = `${clientWidth}px`;
		this.dragList.activeClass && (this.dragger.className = `${className} ${this.dragList.activeClass}`);

		this.dragger.addEventListener('mouseup', this.handleMouseUp);
		this.opacity = 0;
		document.addEventListener('mousemove', this.handleMouseMove);
	}

	/**
	 * 鼠标移动
	 */
	handleMouseMove(event: MouseEvent) {
		const { clientX, clientY } = event;
		const offset = {
			x: clientX - this.position.x,
			y: clientY - this.position.y
		};
		this.dragger.style.transform = `translate(${this.dragList.lockAxis ? 0 : offset.x}px, ${offset.y}px)`;
	}

	/**
	 * 鼠标松开
	 */
	handleMouseUp() {
		document.removeEventListener('mousemove', this.handleMouseMove);
		this.position = { x: NaN, y: NaN };
		this.dragger.style.transition = 'all 0.5s ease';
		this.dragger.style.transform = `translate(0, 0)`;
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