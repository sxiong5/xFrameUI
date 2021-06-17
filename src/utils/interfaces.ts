export interface IIndex<T = any> {
	[prop: string]: T;
}

export interface MenuList {
	category: string
	children: Menu[]
}

interface Menu {
	text: string
	path: string
}