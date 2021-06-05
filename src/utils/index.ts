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

export const deepClone = (obj: Record<string, any>) => {
	if (typeof obj !== 'object') {
		throw new Error('obj is not a object.');
	}

	const newObj: Record<string, any> = Array.isArray(obj) ? [] : {};
	Object.keys(obj).forEach(key => (newObj[key] = typeof obj[key] === 'object' ? deepClone(obj) : obj[key]));

	return newObj;
};
