<template>
	<button
		class="x-button row-layout"
		:class="[
			`x-button--${size}`,
			...typeClass,
			{ 'is-feedback': feedback && hasClicked, 'is-animate': animation, 'is-disabled': disabled }
		]"
		:style="[themeStyle, { '--x': clickX, '--y': clickY, borderColor }]"
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
 * @property {String|Array} type 按钮类型 'round' | 'hollow' | 'circle' | 'text'
 * @property {Boolean} disabled 是否禁用
 * @property {String} nativeType 原生type 'button' | 'submit' | 'reset'
 * @property {Boolean} feedback 是否开启点击反馈
 * @property {Boolean} animation 是否开启悬浮动画
 * @property {String|Object} theme 按钮样式主题
 *
 * @method click 点击事件
 */
import { Vue, Component, Prop, Emit } from 'vue-property-decorator';
import { ButtonThemeOptions, ButtonTypeOptions, xFrameComponentSize } from '@/utils/xFrameConfig';
import { deepClone } from '@/utils';
import { IIndex } from '@/utils/interfaces';

@Component({ name: 'XButton' })
export default class XButton extends Vue {
	public static entryName = 'XButton';

	@Prop({ type: String, default: 'small' })
	size!: xFrameComponentSize;
	@Prop({ type: [String, Array] })
	type?: string | ButtonTypeOptions[];
	@Prop({ type: Boolean, default: false })
	disabled!: boolean;
	@Prop({ type: String, default: 'button' })
	nativeType!: string;
	@Prop({ type: Boolean, default: false })
	feedback!: boolean;
	@Prop({ type: Boolean, default: false })
	animation!: boolean;
	@Prop({ type: [String, Object] })
	theme?: string | ButtonThemeOptions;

	protected typeClass: string[] = [];
	protected themeStyle?: IIndex<string>;
	protected clickX = '';
	protected clickY = '';
	protected hasClicked = false;

	handleClick(event: MouseEvent) {
		if (this.feedback) {
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

	beforeMount() {
		this.typeClass = typeof this.type === 'string' ? [`is-${this.type}`] : this.type?.map(item => `is-${item}`) ?? [];
		typeof this.theme === 'string'
			? this.typeClass.push(`x-button--${this.theme}`)
			: (this.themeStyle = this.getThemeOptions(this.theme));
	}

	get borderColor() {
		return (this.theme as ButtonThemeOptions)?.color ?? '#dcdfe6';
	}

	getThemeOptions(themeOption: ButtonThemeOptions | undefined) {
		if (typeof themeOption === 'undefined') {
			return {};
		}
		const temp = deepClone(themeOption);
		Object.keys(temp).forEach(key => {
			if (key.startsWith('active')) {
				(temp as IIndex)[`--${key}`] = temp[key as keyof ButtonThemeOptions];
				delete temp[key as keyof ButtonThemeOptions];
			}
		});
		return temp;
	}
}
</script>

<style lang='less'>
.x-button {
	display: inline-block;
	cursor: pointer;
	font-weight: 500;
	border-radius: @radius;
	border: 1px solid;
	position: relative;
	z-index: 1;
	overflow: hidden;
	outline: none;
	&:hover {
		color: var(--activeColor, @theme-blue) !important;
		border-color: var(--activeColor, @theme-blue) !important;
		background-color: var(--activeBgColor, @theme-lblue) !important;
	}
	&.is-round {
		border-radius: 50px !important;
	}
	&.is-hollow {
		background: none !important;
	}
	&.is-circle {
		border-radius: 50% !important;
	}
	&.is-text {
		background: none !important;
		border: none !important;
	}
	&.is-disabled {
		cursor: not-allowed;
	}
	&--small {
		padding: 9px 15px;
		font-size: @font12;
	}
	&--middle {
		padding: 10px 20px;
		font-size: @font14;
	}
	&--large {
		padding: 12px 20px;
		font-size: @font14;
	}
	&.is-feedback::before {
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
	&.is-animate {
		&::after {
			.size(0);
			content: '';
			position: absolute;
			left: 100%;
			top: 0;
			z-index: -1;
			transition: all 0.3s ease;
			background-color: var(--activeBgColor, @theme-lblue) !important;
		}
		&:hover {
			color: var(--activeColor, #fff) !important;
		}
		&:hover::after {
			width: 100%;
			left: 0;
			transition: width 0.3s ease;
		}
	}
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