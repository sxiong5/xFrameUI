import { MenuList } from '@/utils/interfaces';

const MENU: MenuList[] = [
	{
		category: 'Basic',
		children: [
			{
				text: 'Button',
				path: 'button'
			}
		]
	},
	{
		category: 'Animation',
		children: [
			{
				text: 'Folding',
				path: 'folding'
			}
		]
	},
	{
		category: 'Interaction',
		children: [
			{
				text: 'DragList',
				path: 'drag-list'
			}
		]
	}
];

export default MENU;
