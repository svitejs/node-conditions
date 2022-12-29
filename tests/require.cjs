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

function readTypes() {
	const value = execSync(`node -C types scripts/test-types.cjs`).toString('utf-8');
	return JSON.parse(value);
}

test('should resolve set conditions', async () => {
	const conditions = await conditionsImport;
	const name = await nameImport;
	const testConditions = conditions.filter((c) => !['import', 'types'].includes(c));
	for (const condition of testConditions) {
		const values = readValues(condition);
		const expectedTrue = [condition, 'node', 'node-addons', 'require'].map(name);
		for (const [name, value] of Object.entries(values)) {
			const expected = expectedTrue.includes(name);
			assert.equal(value, expected, `require failed for condition ${name}`);
		}
	}
	// special handling for types, can't be tested from '.' index export
	const TYPES = readTypes();
	assert.equal(TYPES, true, `require failed for condition types`);
});
test.run();
