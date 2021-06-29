<template>
	<div class="introduction">
		<div class="introduction-text">
			<div>
				<img :src="require('@/assets/images/title.png')" alt="" />
				<h2>A Vue.js 2.x UI Lib for Web</h2>
				<div class="text-author"><i>@Designed by Shihao Xiong</i></div>
			</div>

			<x-button class="btn-more" size="large" :type="['round', 'hollow']" :theme="themeOption" feedback>
				Get Start
			</x-button>
		</div>
		<div></div>
	</div>
</template>

<script lang='ts'>
import { ButtonThemeOptions } from '@/utils/xFrameConfig';
import { Vue, Component } from 'vue-property-decorator';

@Component({ name: 'Introduction' })
export default class Introduction extends Vue {
	themeOption: ButtonThemeOptions = { color: '#3f72af' };
}
</script>

<style lang='less' scoped>
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
	.flex(column, nowrap, space-evenly, flex-start);
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
	.btn-more {
		font-size: @font30;
	}
}
</style>