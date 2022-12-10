# node-conditions

node conditions as boolean flags.

## usage

### esm

```js
// via named export
import { BROWSER } from 'node-conditions';

if (BROWSER) {
	alert('hello browser');
} else {
	console.log('hello console');
}

// via star-alias
import * as conditions from 'node-conditions';
console.log(Object.keys(conditions)); // prints all available conditions

// via default export on subpath, can be any name
import isBrowser from 'node-conditions/browser';
```

### cjs

```js
// via mapped require
const { BROWSER } = require('node-conditions');

if (BROWSER) {
	alert('hello browser');
} else {
	console.log('hello console');
}

// via require
const conditions = require('node-conditions');
console.log(Object.keys(conditions)); // prints all available conditions

// via require of subpath, can be any name
const isBrowser = require('node-conditions/browser');
```

<!-- generated -->

## available conditions

- BROWSER
- NODE
- NODE_ADDONS
- DENO
- DEVELOPMENT
- TEST
- PRODUCTION
- ASTRO
- SOLID
- SVELTE
<!-- /generated -->
