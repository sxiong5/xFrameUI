<template>
	<section class="home">
		<Introduction />
		<Footer />
	</section>
</template>

<script lang='ts'>
import { Vue, Component } from 'vue-property-decorator';
import Introduction from '@/components/Home/Introduction.vue';
import Footer from '@/components/Home/Footer.vue';

@Component({ name: 'Home', components: { Introduction, Footer } })
export default class Home extends Vue {}
</script>

<style lang='less'>
.home {
	.size;
	.flex(@d: column);
	position: relative;
	background: white;
}
</style>