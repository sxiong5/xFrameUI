<template>
	<div class="introduction">
		<div class="introduction-text">
			<div>
				<img :src="require('@/assets/images/title.png')" alt="" />
				<h2>A Vue.js 2.x UI Lib for Web</h2>
				<div class="text-author"><i>@Designed by Shihao Xiong</i></div>
			</div>

			<div>
				<x-button class="btn-start" size="large" round animation>Get Start</x-button>
				<x-button class="btn-more" size="large" round animation>Learn More</x-button>
			</div>
		</div>
		<div></div>
	</div>
</template>

<script lang='ts'>
import { Vue, Component } from 'vue-property-decorator';

@Component({ name: 'Introduction' })
export default class Introduction extends Vue {}
</script>

<style lang='less' scoped>
.list-item {
	padding: 10px;
	background: @theme-lblue;
	& + & {
		margin-top: 10px;
	}
}

.introduction {
	.size(100%, auto);
	.border-box;
	.flex(@j: space-around);
	padding: 0 20%;
	flex-grow: 1;
	color: white;
	user-select: none;
	& > div {
		.size(50%);
	}
}
.introduction-text {
	.flex(column, nowrap, space-around, flex-start);
	text-align: left;
	img {
		width: 400px;
	}
	h2 {
		font-size: 40px;
	}
	.text-author {
		color: #c6c9d2;
		font-size: @font20;
	}
	.btn-start,
	.btn-more {
		font-size: @font30;
		font-weight: bold;
		border: 1px solid @theme-green;
	}
	.btn-start {
		background: @theme-green;
		color: @theme-dblue;
	}
	.btn-more {
		background: none;
		color: @theme-green;
		margin-left: 40px;
	}
}
</style>