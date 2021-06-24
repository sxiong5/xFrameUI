/**
 * Get the marin & padding of a HTMLElement
 */
export const getMP = (element: HTMLElement) => {
	const style = window.getComputedStyle(element);

	const M_P = {
		margin: {
			top: getCSSPixelValue(style.marginTop),
			right: getCSSPixelValue(style.marginRight),
			bottom: getCSSPixelValue(style.marginBottom),
			left: getCSSPixelValue(style.marginLeft)
		},
		padding: {
			top: getCSSPixelValue(style.paddingTop),
			right: getCSSPixelValue(style.paddingRight),
			bottom: getCSSPixelValue(style.paddingBottom),
			left: getCSSPixelValue(style.paddingLeft)
		}
	};

	return M_P;
};

export const getCSSPixelValue = (value: string): number => {
	return +value.replace('px', '');
};

/**
 * Add a class to a dom
 */
export const addClass = (el: HTMLElement, className: string) => {
	el.classList.add(className);
};

/**
 * Remove a class from a dom
 */
export const removeClass = (el: HTMLElement, className: string) => {
	el.classList.contains(className) && el.classList.remove(className);
};
