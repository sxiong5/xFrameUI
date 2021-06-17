import { Menu, MenuList } from '@/utils/interfaces';

export const MENU_INSTRUCTION: Menu[] = [
	{ text: 'Change Log', path: 'change-log' },
	{ text: 'Installation', path: 'installation' },
	{ text: 'Quick Start', path: 'quick-start' }
];

export const MENU_COMPONENTS: MenuList[] = [
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
