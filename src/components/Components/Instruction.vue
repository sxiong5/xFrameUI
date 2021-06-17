<template>
	<ul class="instruction">
		<router-link
			custom
			class="menu-item"
			v-slot="{ navigate }"
			v-for="menu in MENU_INSTRUCTION"
			:key="menu.text"
			:to="`/components/${menu.path}`"
		>
			<InstructionItem :path="`/components/${menu.path}`" @click.native="navigate" role="link">
				{{ menu.text }}
			</InstructionItem>
		</router-link>
	</ul>
</template>

<script lang='ts'>
import { Vue, Component } from 'vue-property-decorator';
import { MENU_INSTRUCTION } from './menu';
import InstructionItem from './InstructionItem.vue';

@Component({ name: 'Instruction', components: { InstructionItem } })
export default class Instruction extends Vue {
	MENU_INSTRUCTION = MENU_INSTRUCTION;
}
</script>

<style lang='less' scoped>
.instruction {
	padding: 0;
	width: 100%;
	margin-top: 0;
	li {
		list-style: none;
		text-align: left;
		cursor: pointer;
		padding: 15px 10px;
		color: @theme-blue;
		font-weight: bold;
	}
}
</style>