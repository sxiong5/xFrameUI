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
import { VNode } from 'vue/types/umd';

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
	protected overflow!: string;

	beforeEnter(el: HTMLElement) {
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
		this.overflow = el.style.overflow;
		if (this.axis === 'y') {
			el.style.height = `${el.scrollHeight}px`;
			el.style.paddingTop = this.padding.top;
			el.style.paddingBottom = this.padding.bottom;
		} else if (this.axis === 'x') {
			el.style.width = `${el.offsetWidth}px`;
			el.style.paddingLeft = this.padding.left;
			el.style.paddingRight = this.padding.right;
		}

		el.style.overflow = 'hidden';
	}

	afterEnter(el: HTMLElement) {
		el.style.overflow = this.overflow;
		if (this.axis === 'y') {
			el.style.height = '';
			el.style.paddingTop = '';
			el.style.paddingBottom = '';
		} else if (this.axis === 'x') {
			el.style.width = '';
			el.style.paddingLeft = '';
			el.style.paddingRight = '';
		}
	}

	beforeLeave(el: HTMLElement) {
		this.overflow = el.style.overflow;
		if (this.axis === 'y') {
			el.style.height = `${el.scrollHeight}px`;
			el.style.paddingTop = this.padding.top;
			el.style.paddingBottom = this.padding.bottom;
			// BUG
			console.log(el.scrollHeight);
		} else if (this.axis === 'x') {
			el.style.width = `${el.offsetWidth}px`;
			el.style.paddingLeft = this.padding.left;
			el.style.paddingRight = this.padding.right;
		}
		el.style.overflow = 'hidden';
	}

	leave(el: HTMLElement) {
		if (this.axis === 'y') {
			el.style.height = '0';
			el.style.paddingTop = '0';
			el.style.paddingBottom = '0';
		} else if (this.axis === 'x') {
			el.style.width = '0px';
			el.style.paddingLeft = '0';
			el.style.paddingRight = '0';
		}
	}

	afterLeave(el: HTMLElement) {
		if (this.axis === 'y') {
			el.style.height = '';
			el.style.paddingTop = '';
			el.style.paddingBottom = '';
		} else if (this.axis === 'x') {
			el.style.width = '';
			el.style.paddingLeft = '';
			el.style.paddingRight = '';
		}
		el.style.overflow = this.overflow;
	}

	mounted() {
		addClass((this.$slots.default as VNode[])[0].elm as HTMLElement, 'folding-transition');

		const { padding } = getMP((this.$slots.default as VNode[])[0].elm as HTMLElement);
		this.padding.top = `${padding.top}px`;
		this.padding.bottom = `${padding.bottom}px`;
		this.padding.left = `${padding.left}px`;
		this.padding.right = `${padding.right}px`;
	}
	beforeDestory() {
		removeClass((this.$slots.default as VNode[])[0].elm as HTMLElement, 'folding-transition');
	}
}
</script>

<style lang="less">
.folding-transition {
	transition: all 0.5s ease;
}
</style>