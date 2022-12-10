import fs from 'fs';
import { fileURLToPath } from 'url';
import { conditions } from '../packages/node-conditions/conditions.js';

function name(condition) {
	return condition.toUpperCase().replace(/[^A-Z]+/g, '_');
}

const pkgPath = fileURLToPath(new URL('../packages/node-conditions/package.json', import.meta.url));
const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf-8'));

pkg.exports = {
	...pkg.exports,
	...conditions.reduce((exports, condition) => {
		exports[`./${condition}`] = {
			import: {
				[condition]: './true.mjs',
				default: './false.mjs'
			},
			require: {
				[condition]: './true.cjs',
				default: './false.cjs'
			}
		};
		return exports;
	}, {})
};

fs.writeFileSync(pkgPath, JSON.stringify(pkg, null, '\t') + '\n');
const mjsIndexPath = fileURLToPath(
	new URL('../packages/node-conditions/index.mjs', import.meta.url)
);
const mjsIndex = conditions
	.map((c) => `export { default as ${name(c)} } from '${pkg.name}/${c}';\n`)
	.join('');
fs.writeFileSync(mjsIndexPath, mjsIndex, 'utf-8');
const cjsIndexPath = fileURLToPath(
	new URL('../packages/node-conditions/index.cjs', import.meta.url)
);
const cjsIndex = conditions
	.map((c) => `module.exports.${name(c)} = require('${pkg.name}/${c}');\n`)
	.join('');
fs.writeFileSync(cjsIndexPath, cjsIndex, 'utf-8');
const typesPath = fileURLToPath(new URL('../packages/node-conditions/index.d.ts', import.meta.url));
const types = conditions.map((c) => `export const ${name(c)}: boolean;\n`).join('');
fs.writeFileSync(typesPath, types, 'utf-8');

const readmePath = fileURLToPath(new URL('../packages/node-conditions/README.md', import.meta.url));
let readme = fs.readFileSync(readmePath, 'utf-8');
readme = readme.replace(
	/\\n<!-- generated -->[\s\S]*<!-- \/generated -->/m,
	`
<!-- generated -->
## available conditions

${conditions.map((c) => `- ${name(c)}`).join('\n')}
<!-- /generated -->
`
);
fs.writeFileSync(readmePath, readme, 'utf-8');
