<template>
	<div class="home">
		<Introduction />
		<Footer />
	</div>
</template>

<script lang='ts'>
import { Vue, Component } from 'vue-property-decorator';
import Introduction from '@/components/Home/Introduction.vue';
import Footer from '@/components/Home/Footer.vue';

@Component({ components: { Introduction, Footer } })
export default class Home extends Vue {}
</script>

<style lang='less' scoped>
.home {
	.size(@h: calc(100vh - 90px));
	.flex(@d: column);
	position: relative;
	background: @theme-dblue;
}
</style>