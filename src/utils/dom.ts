/**
 * Get the maring of a HTMLElement
 */
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

/**
 * Add a class to a dom
 */
export const addClass = (el: HTMLElement, className: string) => {
	el.className = `${el.className} ${className}`;
};

/**
 * Remove a class from a dom
 */
export const removeClass = (el: HTMLElement, className: string) => {
	if (el.className.includes(className)) {
		const classArr = el.className.split(' ');
		const index = classArr.findIndex(item => item === className);
		classArr.splice(index, 1);
		el.className = classArr.join(' ');
	}
};
