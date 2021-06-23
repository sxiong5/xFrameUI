<template>
	<footer class="footer"></footer>
</template>

<script lang='ts'>
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class Footer extends Vue {}
</script>

<style lang='less' scoped>
.footer {
	.size(@h: 120px);
	padding: 30px 0;
	background: fade(@theme-blue, 15);
}
</style>