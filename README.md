# node-conditions

[![npm version](https://img.shields.io/npm/v/node-conditions)](https://www.npmjs.com/package/node-conditions)
[![CI](https://github.com/svitejs/node-conditions/actions/workflows/ci.yml/badge.svg)](https://github.com/svitejs/node-conditions/actions/workflows/ci.yml)

A small utility to read node conditions as boolean flags, useful for conditionally including or excluding code.

## Installation

```bash
npm install --save-dev node-conditions
```

## Usage

See [package readme](packages/node-conditions/README.md#usage)

## Packages

| Package                                     | Changelog                                          |
| ------------------------------------------- | -------------------------------------------------- |
| [node-conditions](packages/node-conditions) | [Changelog](packages/node-conditions/CHANGELOG.md) |

## Development

- Run `pnpm i` to install dependencies
- edit [conditions.js](packages/node-conditions/conditions.js) to add conditions
- run `pnpm generate` to regenerate package
- run `pnpm changeset` to add a changeset
- send PR

## Credits

- Ben McCann for the genius idea to export booleans via conditions in [esm-env](https://github.com/benmccann/esm-env)

## License

[MIT](./LICENSE)
