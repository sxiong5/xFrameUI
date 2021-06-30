<template>
	<div class="introduction">
		<div class="introduction__text">
			<div>
				<img :src="require('@/assets/images/title.png')" alt="" />
				<h2>A Vue.js 2.x UI Lib for Web</h2>
			</div>

			<x-button class="btn" size="large" :type="['round', 'hollow']" :theme="themeOption" feedback animation>
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
	themeOption: ButtonThemeOptions = { color: '#3f72af', activeBgColor: '#3f72af', activeColor: '#fff' };
}
</script>

<style lang='less'>
.introduction {
	.border-box;
	.flex(@j: space-around);
	padding: 0 20%;
	flex-grow: 1;
	color: @theme-dblue;
	user-select: none;
	& > div {
		.size(50%);
	}
	.introduction__text {
		.flex(column, nowrap, space-evenly, flex-start);
		text-align: left;
		img {
			width: 400px;
		}
		h2 {
			font-size: 40px;
		}
		.btn {
			margin-top: 20px;
			font-size: @font30;
		}
	}
}
@media (min-width: 768px) {
	.introduction {
		.size(100%, calc(100vh - 90px));
	}
}
@media (max-width: 768px) {
	.introduction {
		.size(100%, calc(100vh - 110px));
	}
}
</style>