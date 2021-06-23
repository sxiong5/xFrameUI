import { IIndex } from './interfaces';

/**
 * Deep clone an object
 */
export const deepClone = <T extends IIndex>(obj: T): T => {
	if (typeof obj !== 'object') {
		throw new Error('[input params] is not an object.');
	}

	const newObj = Array.isArray(obj) ? [] : {};
	Object.keys(obj).forEach(
		key => ((<IIndex>newObj)[key] = typeof obj[key as keyof T] === 'object' ? deepClone(obj) : obj[key])
	);

	return <T>newObj;
};

/**
 * Conver AaaBbb to aaa-bbb
 */
export const convertName = (camelCaseName: string) => {
	const temp = camelCaseName.substr(0, 1).toLowerCase() + camelCaseName.substr(1);
	const newName = temp.replace(/[A-Z]/g, i => `-${i.toLowerCase()}`);
	return newName;
};
