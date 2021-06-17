<template>
	<li
		class="col-layout"
		:class="{ 'is-checked': isChecked || isHover }"
		@mouseenter="isHover = true"
		@mouseleave="isHover = false"
	>
		<slot></slot>
	</li>
</template>

<script lang='ts'>
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component({ name: 'InstructionItem' })
export default class InstructionItem extends Vue {
	@Prop({ type: String, required: true })
	path!: string;

	get isChecked() {
		return this.path === this.$route.path;
	}
	isHover = false;
}
</script>

<style lang='less' scoped>
.is-checked {
	background: @theme-lblue;
	border-radius: @radius;
}
</style>