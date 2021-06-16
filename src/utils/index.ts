import { IIndex } from './interfaces';

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
