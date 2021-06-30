<template>
	<footer class="footer"></footer>
</template>

<script lang='ts'>
import { Vue, Component } from 'vue-property-decorator';

@Component({ name: 'Footer' })
export default class Footer extends Vue {}
</script>

<style lang='less'>
.footer {
	.size(@h: 100px);
	padding: 30px 0;
	background: @theme-dblue;
}
</style>