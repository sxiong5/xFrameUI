<template>
	<div class="demo-block">
		<div class="source">
			<slot name="source"></slot>
		</div>
		<div class="meta" ref="meta">
			<div class="description" v-if="$slots.default">
				<slot></slot>
			</div>
			<div class="highlight">
				<slot name="highlight"></slot>
			</div>
		</div>
	</div>
</template>

<script lang='ts'>
import { Vue, Component } from 'vue-property-decorator';

@Component({ name: 'DemoBlock' })
export default class DemoBlock extends Vue {}
</script>

<style lang='less' scoped>
</style>