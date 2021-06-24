<template>
	<x-button
		type="round"
		size="large"
		class="switch-btn"
		@mouseenter.native="show = true"
		@mouseleave.native="show = false"
		@click="$emit('click')"
	>
		<i class="xfont" :class="showCode ? 'x-icon-code-hide' : 'x-icon-code-show'"></i>
		<x-folding axis="x">
			<div class="btn__text" v-show="show">Code</div>
		</x-folding>
	</x-button>
</template>

<script lang='ts'>
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component({ name: 'SwitchButton' })
export default class SwitchButton extends Vue {
	@Prop({ type: Boolean, required: true })
	showCode!: boolean;

	show = false;
}
</script>

<style lang='less'>
.switch-btn {
	display: flex;
	margin: auto;
}
.btn__text {
	padding-left: 10px;
}
</style>