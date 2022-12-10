const { test } = require('uvu');
const assert = require('uvu/assert');
const conditionsImport = import('../packages/node-conditions/conditions.js').then(
	(m) => m.conditions
);
const { execSync } = require('child_process');
const nameImport = import('../scripts/generate.js').then((m) => m.name);

function readValues(condition) {
	const values = execSync(`node -C ${condition} scripts/test.cjs`).toString('utf-8');
	return JSON.parse(values);
}

test('should resolve set conditions', async () => {
	const conditions = await conditionsImport;
	const name = await nameImport;
	for (const condition of conditions) {
		const values = readValues(condition);
		const expectedTrue = [condition, 'node', 'node-addons'].map(name);
		for (const [name, value] of Object.entries(values)) {
			const expected = expectedTrue.includes(name);
			assert.equal(value, expected, `${name}`);
		}
	}
});
test.run();
