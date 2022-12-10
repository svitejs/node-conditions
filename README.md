# @svitejs/node-conditions

[![npm version](https://img.shields.io/npm/v/node-conditions)](https://www.npmjs.com/package/node-conditions)
[![CI](https://github.com/svitejs/node-conditions/actions/workflows/ci.yml/badge.svg)](https://github.com/svitejs/node-conditions/actions/workflows/ci.yml)

The official [Svelte](https://svelte.dev) plugin for [Vite](https://vitejs.dev).

## Installation

```bash
npm install --save-dev @svitejs/node-conditions
```

## Usage

```js
// vite.config.js
import { defineConfig } from 'vite';
import { svelte } from '@svitejs/node-conditions';

export default defineConfig({
  plugins: [
    svelte({
      /* plugin options */
    })
  ]
});
```
## Packages

| Package                                            | Changelog                                             |
| -------------------------------------------------- | ----------------------------------------------------- |
| [node-conditions](packages/node-conditions) | [Changelog](packages/node-conditions/CHANGELOG.md) |


## Development

- Run `pnpm i` to install dependencies
- edit [conditions.js](packages/node-conditions/conditions.js) to add conditions
- run `pnpm generate` to regenerate package
- run `pnpm changeset` to add a changeset
- send PR


## Credits

- Ben McCann for the genius idea to export booleans via conditions in  [esm-env](https://github.com/benmccann/esm-env)

## License

[MIT](./LICENSE)
