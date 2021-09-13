<template>
	<div id="app">
		<Header style="z-index: 10" />
		<router-view style="z-index: 10" />
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
	.flex(column, @j: flex-start, @a: flex-start);
	min-height: 100vh;
	font-family: Helvetica Neue, Helvetica, PingFang SC, Hiragino Sans GB, Microsoft YaHei, SimSun, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	overflow-x: hidden;
}
</style>
