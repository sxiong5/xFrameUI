<template>
	<div class="demo-block">
		<div class="source">
			<slot name="source"></slot>
		</div>
		<div class="bottom-bar" :style="{ 'border-bottom': showMeta ? '1px solid #eee' : 'none' }">
			<span @click="showMeta = !showMeta">Expand</span>
			<span>Copy</span>
		</div>
		<div class="meta" ref="meta" v-show="showMeta">
			<div class="description" v-if="$slots.default">
				<slot></slot>
			</div>
			<div class="highlight" v-highlight>
				<slot name="highlight"></slot>
			</div>
		</div>
	</div>
</template>

<script lang='ts'>
import { Vue, Component } from 'vue-property-decorator';

@Component({ name: 'DemoBlock' })
export default class DemoBlock extends Vue {
	showMeta = false;
}
</script>

<style lang='less' scoped>
.demo-block {
	border-radius: @radius;
	border: @border;
	text-align: left;
	transition: box-shadow 0.5s;
	&:hover {
		box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
	}
	.source,
	.meta {
		padding: 20px;
	}
	.bottom-bar {
		padding: 15px;
		text-align: center;
		cursor: pointer;
		border-top: @border;
		span {
			margin-left: 50px;
			&:hover {
				color: @theme-blue;
			}
		}
	}
}
</style>