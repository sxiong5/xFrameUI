export const getMargin = (element: HTMLElement) => {
	const style = window.getComputedStyle(element);

	return {
		top: getCSSPixelValue(style.marginTop),
		right: getCSSPixelValue(style.marginRight),
		bottom: getCSSPixelValue(style.marginBottom),
		left: getCSSPixelValue(style.marginLeft)
	};
};

const getCSSPixelValue = (stringValue: string): number => {
	return stringValue.substr(-2) === 'px' ? parseFloat(stringValue) : 0;
};
