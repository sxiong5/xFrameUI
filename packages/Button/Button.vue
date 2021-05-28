<template>
	<button class="x-button row-layout" :class="[`x-button--${size}`, { 'is-round': round }]" :type="nativeType">
		<slot></slot>
	</button>
</template>

<script lang='ts'>
/**
 * 按钮
 * @property {String} size 按钮大小 'small' | 'middle' | 'large'
 * @property {Boolean} round 是否为圆角
 * @property {String} nativeType 原生type  'button' | 'submit' | 'reset'
 */
import { Vue, Component, Prop } from 'vue-property-decorator';
import { xFrameComponentSize } from '@/utils/xFrameConfig';

@Component({ name: 'XButton' })
export default class XButton extends Vue {
	public static entryName = 'XButton';

	@Prop({ type: String, default: 'middle' })
	size?: xFrameComponentSize;
	@Prop({ type: Boolean, default: false })
	round?: boolean;
	@Prop({ type: String, default: 'button' })
	nativeType?: string;
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
	&.is-round {
		border-radius: 50px !important;
	}
}
.x-button--small {
	padding: 9px 10px;
	&.is-round {
		font-size: @font12;
	}
}
.x-button--middle {
	padding: 10px 15px;
	&.is-round {
		font-size: @font14;
	}
}
.x-button--large {
	padding: 12px 20px;
	&.is-round {
		font-size: @font14;
	}
}
</style>