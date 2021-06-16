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

interface style {
	height: string;
	overflow: string;
}

@Component({ name: 'XFolding' })
export default class XFolding extends Vue {
	public static entryName = 'XFolding';

	protected style!: style;

	beforeEnter(el: HTMLElement) {
		this.style.height = '0';
		this.style.overflow = el.style.overflow;
	}

	enter(el: HTMLElement) {
		el.style.height = '';
	}

	afterEnter(el: HTMLElement) {
		el.style.height = '';
	}

	beforeLeave(el: HTMLElement) {
		el.style.overflow = 'hidden';
	}

	leave(el: HTMLElement) {
		if (el.scrollHeight !== 0) {
			el.style.height = '0';
		}
	}

	afterLeave(el: HTMLElement) {
		el.style.height = '';
		el.style.overflow = this.style.overflow;
	}
}
</script>

<style lang='less' scoped>
</style>