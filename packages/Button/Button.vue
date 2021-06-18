<template>
	<button
		class="x-button row-layout"
		:class="[
			`x-button--${size}`,
			{ 'has-animation': animation && hasClicked, 'is-round': round, 'is-disabled': disabled }
		]"
		:style="{ '--x': clickX, '--y': clickY }"
		:type="nativeType"
		:disabled="disabled"
		@click="handleClick($event)"
	>
		<slot></slot>
	</button>
</template>

<script lang='ts'>
/**
 * @property {String} size 按钮大小 'small' | 'middle' | 'large'
 * @property {Boolean} round 是否为圆角
 * @property {Boolean} disabled 是否禁用
 * @property {String} nativeType 原生type  'button' | 'submit' | 'reset'
 * @property {Boolean} animation 是否开启点击动画
 *
 * @method click 点击事件
 */
import { Vue, Component, Prop, Emit } from 'vue-property-decorator';
import { xFrameComponentSize } from '@/utils/xFrameConfig';

@Component({ name: 'XButton' })
export default class XButton extends Vue {
	public static entryName = 'XButton';

	@Prop({ type: String, default: 'small' })
	size!: xFrameComponentSize;
	@Prop({ type: Boolean, default: false })
	round!: boolean;
	@Prop({ type: Boolean, default: false })
	disabled!: boolean;
	@Prop({ type: String, default: 'button' })
	nativeType!: string;
	@Prop({ type: Boolean, default: false })
	animation!: boolean;

	protected clickX = '';
	protected clickY = '';
	protected hasClicked = false;

	handleClick(event: MouseEvent) {
		if (this.animation) {
			this.clickX = `${event.offsetX}px`;
			this.clickY = `${event.offsetY}px`;
			this.hasClicked = true;
			setTimeout(() => (this.hasClicked = false), 1000);
		}
		this.emitClick(event);
	}

	@Emit('click')
	emitClick(event: MouseEvent): MouseEvent {
		return event;
	}
}
</script>

<style lang='less' scoped>
.x-button {
	display: inline-block;
	cursor: pointer;
	font-weight: 500;
	border-radius: @radius;
	border: 1px solid #dcdfe6;
	position: relative;
	z-index: 1;
	overflow: hidden;
	outline: none;
	&:hover {
		color: @theme-blue;
		border-color: @theme-blue;
		background-color: @theme-lblue;
	}
	&.is-round {
		border-radius: 50px !important;
	}
	&.is-disabled {
		cursor: not-allowed;
	}
}
.has-animation::after {
	position: absolute;
	content: '';
	display: block;
	border-radius: 50%;
	transform: translate(-50%, -50%);
	left: var(--x);
	top: var(--y);
	background: rgba(255, 255, 255, 0.3);
	animation: ripples 1s ease-out;
}
.x-button--small {
	padding: 9px 15px;
	font-size: @font12;
}
.x-button--middle {
	padding: 10px 20px;
	font-size: @font14;
}
.x-button--large {
	padding: 12px 20px;
	font-size: @font14;
}

@keyframes ripples {
	0% {
		.size(0, 0);
		opacity: 0;
	}
	50% {
		opacity: 1;
	}
	100% {
		.size(500px, 500px);
		opacity: 0;
	}
}
</style>