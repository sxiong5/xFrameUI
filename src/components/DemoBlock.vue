<template>
	<div class="demo-block">
		<div class="source">
			<slot name="source"></slot>
		</div>
		<div class="bottom-bar" :style="{ 'border-bottom': showMeta ? '1px solid #eee' : 'none' }">
			<!-- <x-button @click="showMeta = !showMeta" size="large" type="text">Expand</x-button> -->
			<SwitchButton @click="showMeta = !showMeta" />
		</div>
		<x-folding>
			<div class="meta" v-show="showMeta">
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
import SwitchButton from './Components/SwitchButton.vue';

@Component({ name: 'DemoBlock', components: { SwitchButton } })
export default class DemoBlock extends Vue {
	showMeta = false;
}
</script>