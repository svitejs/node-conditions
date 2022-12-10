import { test } from 'uvu';
import * as assert from 'uvu/assert';
import { conditions } from '../packages/node-conditions/conditions.js';
import { execSync } from 'child_process';
import { name } from '../scripts/generate.js';

function readValues(condition) {
	const values = execSync(`node -C ${condition} scripts/test.mjs`).toString('utf-8');
	return JSON.parse(values);
}

test('should resolve set conditions', () => {
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
