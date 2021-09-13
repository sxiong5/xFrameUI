<template>
	<section class="home">
		<Introduction />
		<div class="home__animate" ref="animate"></div>
	</section>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import Introduction from '@/components/Home/Introduction.vue';
import Footer from '@/components/Home/Footer.vue';
import lottie, { AnimationConfigWithData } from 'lottie-web';
import animationData from '@/assets/Blogging.json';

@Component({ name: 'Home', components: { Introduction, Footer } })
export default class Home extends Vue {
	mounted() {
		const params: AnimationConfigWithData = {
			container: this.$refs.animate as Element,
			renderer: 'svg',
			loop: true,
			autoplay: true,
			animationData: animationData
		};

		lottie.loadAnimation(params);
	}
}
</script>

<style lang="less">
.home {
	.size;
	.flex(@d: column);
	position: relative;
}
.home__animate {
	position: absolute;
	right: 0;
	top: 0;
	bottom: 0;
	width: 70%;
}
</style>
