import { test } from 'uvu';
import * as assert from 'uvu/assert';
import { conditions } from '../packages/node-conditions/conditions.js';
import { execSync } from 'child_process';
import { name } from '../scripts/generate.js';

function readValues(condition) {
	const values = execSync(`node -C ${condition} scripts/test.mjs`).toString('utf-8');
	return JSON.parse(values);
}

function readTypes() {
	const value = execSync(`node -C types scripts/test-types.mjs`).toString('utf-8');
	return JSON.parse(value);
}

test('should resolve set conditions', () => {
	const testConditions = conditions.filter((c) => !['require', 'types'].includes(c));
	for (const condition of testConditions) {
		const values = readValues(condition);
		const expectedTrue = [condition, 'node', 'node-addons', 'import'].map(name);
		for (const [name, value] of Object.entries(values)) {
			const expected = expectedTrue.includes(name);
			assert.equal(value, expected, `esm import failed for condition ${name}`);
		}
	}
	// special handling for types, can't be tested from '.' index export
	const TYPES = readTypes();
	assert.equal(TYPES, true, `esm import failed for condition types`);
});
test.run();
