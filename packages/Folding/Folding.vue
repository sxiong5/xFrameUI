<template>
	<transition
		name="folding"
		@before-enter="beforeEnter"
		@enter="enter"
		@after-enter="afterEnter"
		@before-leave="beforeLeave"
		@leave="leave"
		@after-leave="afterLeave"
	>
		<slot></slot>
	</transition>
</template>

<script lang='ts'>
/**
 * @property {String} axis 主轴方向
 */
import { Vue, Component, Prop } from 'vue-property-decorator';
import { addClass, removeClass, getMP } from '@/utils/dom';

@Component({ name: 'XFolding' })
export default class XFolding extends Vue {
	public static entryName = 'XFolding';

	@Prop({
		type: String,
		default: 'y',
		validator(value) {
			return ['x', 'y'].includes(value);
		}
	})
	axis!: string;

	protected padding = { top: '', bottom: '', left: '', right: '' };

	beforeEnter(el: HTMLElement) {
		addClass(el, 'folding-transition');
		const { padding } = getMP(el);

		this.padding.top = `${padding.top}px`;
		this.padding.bottom = `${padding.bottom}px`;
		this.padding.left = `${padding.left}px`;
		this.padding.right = `${padding.right}px`;

		if (this.axis === 'y') {
			el.style.height = '0';
			el.style.paddingTop = '0';
			el.style.paddingBottom = '0';
		} else if (this.axis === 'x') {
			el.style.width = '0';
			el.style.paddingLeft = '0';
			el.style.paddingRight = '0';
		}
	}

	enter(el: HTMLElement) {
		if (this.axis === 'y') {
			el.style.height = `${el.scrollHeight}px`;
			el.style.paddingTop = this.padding.top;
			el.style.paddingBottom = this.padding.bottom;
		} else if (this.axis === 'x') {
			el.style.width = `${el.scrollWidth}px`;
			el.style.paddingLeft = this.padding.left;
			el.style.paddingRight = this.padding.right;
		}
	}

	afterEnter(el: HTMLElement) {
		removeClass(el, 'folding-transition');
	}

	beforeLeave(el: HTMLElement) {
		addClass(el, 'folding-transition');
		if (this.axis === 'y') {
			el.style.height = `${el.scrollHeight}px`;
		} else if (this.axis === 'x') {
			el.style.width = `${el.scrollWidth}px`;
		}
	}

	leave(el: HTMLElement) {
		if (this.axis === 'y') {
			el.style.height = '0';
			el.style.paddingTop = '0';
			el.style.paddingBottom = '0';
		} else if (this.axis === 'x') {
			el.style.width = '0';
			el.style.paddingLeft = '0';
			el.style.paddingRight = '0';
		}
	}

	afterLeave(el: HTMLElement) {
		removeClass(el, 'folding-transition');
		if (this.axis === 'y') {
			el.style.height = '0';
			el.style.paddingTop = this.padding.top;
			el.style.paddingBottom = this.padding.bottom;
		} else if (this.axis === 'x') {
			el.style.width = '0';
			el.style.paddingLeft = this.padding.left;
			el.style.paddingRight = this.padding.right;
		}
	}
}
</script>

<style lang="less">
.folding-transition {
	transition: all 0.5s ease;
}
</style>