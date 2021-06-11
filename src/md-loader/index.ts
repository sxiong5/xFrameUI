const md = require('markdown-it')();
const container = require('markdown-it-container');
const fence = require('./fence.ts');

fence(md);

module.exports = {
	raw: true,
	use: [
		[
			container,
			'demo',
			{
				// @ts-ignore
				validate(params) {
					return params.trim().match(/^demo\s*(.*)$/);
				},
				// @ts-ignore
				render(tokens, idx) {
					const m = tokens[idx].info.trim().match(/^demo\s*(.*)$/);
					if (tokens[idx].nesting === 1) {
						const description = m && m.length > 1 ? m[1] : '';
						const content = tokens[idx + 1].type === 'fence' ? tokens[idx + 1].content : '';
						console.log(content);

						return `
              <demo-block>

            `;
					}
					return '</demo-block>';
				}
			}
		],
		[container, 'tip'],
		[container, 'warning']
	]
};
