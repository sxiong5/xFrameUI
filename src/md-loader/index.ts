const utils = require('./util.ts');
const markdown = require('./config.ts');

// @ts-ignore
module.exports = function(source) {
	const content = markdown.render(source);

	const startTag = '<!--demo:';
	const startTagLen = startTag.length;
	const endTag = ':demo-->';
	const endTagLen = endTag.length;

	let componenetsString = '';
	let id = 0; // demo 的 id
	let output = []; // 输出的内容
	let start = 0; // 字符串开始位置

	let commentStart = content.indexOf(startTag);
	let commentEnd = content.indexOf(endTag, commentStart + startTagLen);
	while (commentStart !== -1 && commentEnd !== -1) {
		output.push(content.slice(start, commentStart));

		const commentContent = content.slice(commentStart + startTagLen, commentEnd);
		const html = utils.stripTemplate(commentContent);
		const script = utils.stripScript(commentContent);
		let demoComponentContent = utils.genInlineComponentText(html, script);
		const demoComponentName = `x-demo${id}`;
		output.push(`<template #source><${demoComponentName} /></template>`);
		componenetsString += `${JSON.stringify(demoComponentName)}: ${demoComponentContent},`;

		// 重新计算下一次的位置
		id++;
		start = commentEnd + endTagLen;
		commentStart = content.indexOf(startTag, start);
		commentEnd = content.indexOf(endTag, commentStart + startTagLen);
	}

	let pageScript = '';
	if (componenetsString) {
		pageScript = `<script>
      export default {
        name: 'component-doc',
        components: {
          ${componenetsString}
        }
      }
    </script>`;
	} else if (content.indexOf('<script>') === 0) {
		start = content.indexOf('</script>') + '</script>'.length;
		pageScript = content.slice(0, start);
	}

	output.push(content.slice(start));
	return `
    <template>
      <section class="content x-doc">
        ${output.join('')}
      </section>
    </template>
    ${pageScript}
  `;
};
