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
	showMeta = true;
}
</script>

<style lang='less'>
.demo-block {
	border-radius: @radius;
	border: @border;
	text-align: left;
	transition: box-shadow 0.5s;
	code {
		font-family: Menlo, Monaco, Consolas, Courier, monospace;
	}
	&:hover {
		box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
	}
	.description {
		border-radius: @radius;
		background: #eee;
		padding: 12px 15px;
		p {
			margin: 0;
		}
		code {
			border-radius: @radius;
			background: @theme-lblue;
			color: @theme-blue;
			display: inline-block;
			font-size: @font14;
			padding: 3px 5px;
		}
	}
	.highlight {
		code {
			font-size: @font14;
		}
	}
	.source,
	.meta {
		box-sizing: content-box;
		padding: 20px;
	}
	.bottom-bar {
		padding: 15px;
		text-align: center;
		border-top: @border;
		span {
			.none-select;
			cursor: pointer;
			&:hover {
				color: @theme-blue;
			}
		}
	}
}
</style>