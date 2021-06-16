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
import { Vue, Component } from 'vue-property-decorator';
import { addClass, removeClass, getMP } from '@/utils/dom';

@Component({ name: 'XFolding' })
export default class XFolding extends Vue {
	public static entryName = 'XFolding';

	protected padding = { top: '', bottom: '' };

	beforeEnter(el: HTMLElement) {
		addClass(el, 'folding-transition');
		const { padding } = getMP(el);

		this.padding.top = `${padding.top}px`;
		this.padding.bottom = `${padding.bottom}px`;

		el.style.height = '0';
		el.style.paddingTop = '0';
		el.style.paddingBottom = '0';
	}

	enter(el: HTMLElement) {
		el.style.height = `${el.scrollHeight}px`;
		el.style.paddingTop = this.padding.top;
		el.style.paddingBottom = this.padding.bottom;
	}

	afterEnter(el: HTMLElement) {
		removeClass(el, 'folding-transition');
	}

	beforeLeave(el: HTMLElement) {
		addClass(el, 'folding-transition');
		el.style.height = `${el.scrollHeight}px`;
	}

	leave(el: HTMLElement) {
		el.style.height = '0';
		el.style.paddingTop = '0';
		el.style.paddingBottom = '0';
	}

	afterLeave(el: HTMLElement) {
		removeClass(el, 'folding-transition');
		el.style.height = '0';
		el.style.paddingTop = this.padding.top;
		el.style.paddingBottom = this.padding.bottom;
	}
}
</script>

<style lang="less">
.folding-transition {
	transition: all 0.5s ease;
}
</style>