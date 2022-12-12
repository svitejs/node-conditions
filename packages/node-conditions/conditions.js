// add new conditions here and scripts/generate.js generates the code
export const conditions = [
	//environments
	'browser',
	'node',
	'node-addons',
	'deno',
	'bun', // maybe used or useful in the future
	'worker', // used by cloudflare and webpack

	// modes
	'development',
	'test', // not officially mentioned in the node docs but inferred from the other 2
	'production',

	//frameworks
	'astro',
	'imba',
	'solid',
	'svelte'
];
