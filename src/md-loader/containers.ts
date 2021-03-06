const mdContainer = require('markdown-it-container');

// @ts-ignore
module.exports = md => {
	md.use(mdContainer, 'demo', {
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

				return `<demo-block>
        ${description ? `${md.render(description)}` : ''}
        <!--demo:${content}:demo-->
        `;
			}
			return '</demo-block>';
		}
	});

	md.use(mdContainer, 'tip');
	md.use(mdContainer, 'warning');
};
