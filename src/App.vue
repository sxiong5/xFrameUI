<template>
	<div id="app">
		<Header />
		<router-view />
	</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Header from '@/components/Header.vue';

@Component({ components: { Header } })
export default class App extends Vue {}
</script>

<style lang="less">
#app {
	.size(@h: 100vh);
	font-family: Helvetica Neue, Helvetica, PingFang SC, Hiragino Sans GB, Microsoft YaHei, SimSun, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	overflow-y: hidden;
}
</style>
