import { IIndex } from './interfaces';

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
 * Deep clone an object
 */
export const deepClone = <T extends IIndex>(obj: T): T => {
	if (typeof obj !== 'object') {
		throw new Error('[input params] is not a object.');
	}

	const newObj = Array.isArray(obj) ? [] : {};
	Object.keys(obj).forEach(
		key => ((<IIndex>newObj)[key] = typeof obj[key as keyof T] === 'object' ? deepClone(obj) : obj[key])
	);

	return <T>newObj;
};
