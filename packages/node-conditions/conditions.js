// add new conditions here and scripts/generate.js generates the code
export const conditions = [
	// environments
	'browser',
	'node',
	'node-addons',
	'deno',
	'bun', // maybe used or useful in the future
	'worker', // used by cloudflare and webpack

	// proposed runtimes by wintercg https://runtime-keys.proposal.wintercg.org/
	'edge-routine',
	'workerd',
	'lagon',
	'react-native',
	'netlify',
	'electron',
	'edge-light',

	// modes
	'development',
	'test', // not officially mentioned in the node docs but inferred from the other 2
	'production',

	// frameworks
	'astro',
	'imba',
	'solid',
	'svelte',
	'react-server',

	// bundlers et al
	'types', // typescript
	'module', // webpack, see https://github.com/microsoft/tslib/issues/183#issuecomment-1279411988

	// loaded via
	'import',
	'require'
];
