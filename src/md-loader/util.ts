const { compileTemplate } = require('@vue/component-compiler-utils');
const compiler = require('vue-template-compiler');

//@ts-ignore
function stripScript(content) {
	const result = content.match(/<(script)>([\s\S]+)<\/\1>/);
	return result && result[2] ? result[2].trim() : '';
}

//@ts-ignore
function stripStyle(content) {
	const result = content.match(/<(style)\s*>([\s\S]+)<\/\1>/);
	return result && result[2] ? result[2].trim() : '';
}

// 编写例子时不一定有 template。所以采取的方案是剔除其他的内容
//@ts-ignore
function stripTemplate(content) {
	content = content.trim();
	if (!content) {
		return content;
	}
	return content.replace(/<(script|style)[\s\S]+<\/\1>/g, '').trim();
}

//@ts-ignore
function pad(source) {
	return (
		source
			.split(/\r?\n/)
			//@ts-ignore
			.map(line => `  ${line}`)
			.join('\n')
	);
}

//@ts-ignore
function genInlineComponentText(template, script) {
	// https://github.com/vuejs/vue-loader/blob/423b8341ab368c2117931e909e2da9af74503635/lib/loaders/templateLoader.js#L46
	const finalOptions = {
		source: `<div>${template}</div>`,
		filename: 'inline-component', // TODO：这里有待调整
		compiler
	};
	const compiled = compileTemplate(finalOptions);
	// tips
	if (compiled.tips && compiled.tips.length) {
		//@ts-ignore
		compiled.tips.forEach(tip => {
			console.warn(tip);
		});
	}
	// errors
	if (compiled.errors && compiled.errors.length) {
		console.error(
			`\n  Error compiling template:\n${pad(compiled.source)}\n` +
				//@ts-ignore
				compiled.errors.map(e => `  - ${e}`).join('\n') +
				'\n'
		);
	}
	let demoComponentContent = `
    ${compiled.code}
  `;
	// todo: 这里采用了硬编码有待改进
	script = script.trim();
	if (script) {
		script = script.replace(/export\s+default/, 'const democomponentExport =');
	} else {
		script = 'const democomponentExport = {}';
	}
	demoComponentContent = `(function() {
    ${demoComponentContent}
    ${script}
    return {
      render,
      staticRenderFns,
      ...democomponentExport
    }
  })()`;
	return demoComponentContent;
}

module.exports = {
	stripScript,
	stripStyle,
	stripTemplate,
	genInlineComponentText
};
