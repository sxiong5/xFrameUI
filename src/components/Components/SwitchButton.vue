<template>
	<x-button
		type="round"
		size="large"
		@mouseenter.native="show = true"
		@mouseleave.native="show = false"
		@click="$emit('click')"
	>
		aaa
		<x-folding axis="x">
			<span style="width: 48px" v-show="show">Expand</span>
		</x-folding>
	</x-button>
</template>

<script lang='ts'>
import { Vue, Component } from 'vue-property-decorator';

@Component({ name: 'SwitchButton' })
export default class SwitchButton extends Vue {
	show = false;
}
</script>

<style lang='less' scoped>
</style>