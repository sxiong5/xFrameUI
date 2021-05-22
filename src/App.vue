<template>
	<div id="app">
		<XDragList v-model="data" />
	</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class App extends Vue {
	data: Array<string> = ['demoItem1', 'demoItem2', 'demoItem3', 'demoItem4', 'demoItem5', 'demoItem6', 'demoItem7'];
}
</script>

<style lang="less">
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
	width: 100%;
}
</style>
