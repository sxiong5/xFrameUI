<template>
	<div class="demo-block">
		<slot name="highlight"></slot>
		<div class="source">
			<slot name="source"></slot>
		</div>
		<slot name="highlight"></slot>
	</div>
</template>

<script lang='ts'>
import { Vue, Component } from 'vue-property-decorator';

@Component({ name: 'DemoBlock' })
export default class DemoBlock extends Vue {}
</script>

<style lang='less' scoped>
</style>