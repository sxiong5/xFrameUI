<template>
	<div class="demo-block">
		<div class="source">
			<slot name="source"></slot>
		</div>
		<div class="bottom-bar" :style="{ 'border-bottom': showMeta ? '1px solid #eee' : 'none' }">
			<span @click="showMeta = !showMeta">Expand</span>
		</div>
		<x-folding>
			<div class="meta" ref="meta" v-show="showMeta">
				<div class="description" v-if="$slots.default">
					<slot></slot>
				</div>
				<div class="highlight" v-highlight>
					<slot name="highlight"></slot>
				</div>
			</div>
		</x-folding>
	</div>
</template>

<script lang='ts'>
import { Vue, Component } from 'vue-property-decorator';

@Component({ name: 'DemoBlock' })
export default class DemoBlock extends Vue {
	showMeta = false;
}
</script>