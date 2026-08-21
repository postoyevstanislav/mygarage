# Module 1 — Session 4

## Topics

- Node.js module system
- CommonJS
- `require()`
- `module.exports`
- `exports`
- ES Modules
- `import` / `export`
- `"type": "module"`
- `.mjs` / `.cjs`
- Named exports vs default exports
- npm scripts
- Node module resolution
- Relative imports vs package imports

## Key Takeaways

### CommonJS

CommonJS is Node.js's traditional module system.

```js
const fs = require('fs');
```

A module can expose values through:

```js
module.exports = value;
```

or:

```js
exports.foo = foo;
```

Important distinction:

```js
module.exports = value;
```

replaces the exported value.

```js
exports.foo = foo;
```

adds a property to the existing `module.exports` object.

`exports` is effectively a reference to `module.exports` initially. Reassigning `exports` does not replace what the module exports.

### ES Modules

ES Modules use:

```js
import ...
export ...
```

Example:

```js
export const foo = () => {};
```

and:

```js
import { foo } from './foo.js';
```

A default export is imported without braces:

```js
export default foo;
```

```js
import foo from './foo.js';
```

Named and default exports are different concepts.

### Choosing the module system

A `.js` file can be interpreted as ESM when the nearest `package.json` contains:

```json
{
  "type": "module"
}
```

Without that setting, `.js` is normally treated as CommonJS in the course's Node examples.

Node also supports explicit extensions:

- `.mjs` → ES Module
- `.cjs` → CommonJS

### npm scripts

`package.json` can define reusable commands:

```json
{
  "scripts": {
    "dev": "node src/index.js"
  }
}
```

Then:

```bash
npm run dev
```

runs the configured command.

The point of npm scripts is to give the project consistent, named commands instead of requiring developers to remember long shell commands.

### Module resolution

A relative import such as:

```js
require('./utils');
```

or:

```js
import './utils.js';
```

starts from the current module's location.

A bare package specifier such as:

```js
require('lodash');
```

refers to a package/module resolved through Node's module-resolution rules rather than a relative filesystem path.

## Important Mistakes / Reinforcement

- `module.exports` is the actual exported value.
- `exports` starts as a reference to `module.exports`.
- Reassigning `exports` does not replace `module.exports`.
- Named imports use `{ }`; default imports do not.
- `"type": "module"` applies according to the nearest `package.json`.
- Changing `"type"` can change how `.js` files are interpreted.
- CommonJS and ESM have different syntax and runtime behavior.
- When switching to ESM, CommonJS globals such as `__dirname` are not automatically available.
- npm scripts are project commands defined in `package.json`.

## Practical Work

During the session we worked with Node modules and package configuration, including:

- CommonJS `require()`
- `module.exports`
- `exports`
- ES Module `import` / `export`
- `"type": "module"`
- `.mjs` / `.cjs`
- npm scripts
- module resolution

## Session Status

Session 4 — Modules & npm — Completed.

## Next Session

Session 5 — Node Core APIs.
