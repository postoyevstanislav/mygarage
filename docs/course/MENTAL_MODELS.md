# MENTAL_MODELS

## Model 1

JavaScript (language)
↓
Engine
↓
Runtime
↓
Host APIs

Browser APIs:
- document
- window
- localStorage

Node APIs:
- fs
- http
- process

---

## Model 2

JavaScript
↓
Parser
↓
AST
↓
Ignition
↓
Bytecode
↓
TurboFan
↓
Machine Code
↓
CPU

---

## Model 3

Environment Variables

Operating System
↓
process.env
↑
dotenv (.env) ← local development only

---

## Model 4

Synchronous JavaScript
↓
process.nextTick
↓
Promise microtasks
↓
Event Loop phases

Event Loop phases covered:

timers → poll → check

Examples:
- setTimeout() → timers
- I/O callbacks → poll
- setImmediate() → check

Important:
- setTimeout(fn, 0) does not mean "run immediately".
- Top-level setTimeout(0) vs setImmediate() has no guaranteed order.
- Inside an I/O callback, setImmediate() runs before setTimeout(0).

Async file I/O:

Synchronous:

JavaScript
↓
fs.readFileSync()
↓
JS waits / execution is blocked
↓
file result
↓
continue JS

Asynchronous:

JavaScript
↓
fs.readFile()
↓
Node/libuv handles async operation
↓
JavaScript continues
↓
I/O completes
↓
callback executes

---

## Model 5 — CommonJS

math.js
↓
module.exports = X
↓
require('./math')
↓
X

- `module.exports = value` exports that value directly.
- `module.exports = { sum, multiply }` exports an object.
- `exports.foo = value` adds `foo` to the existing export object.
- `exports.foo = value` is effectively `module.exports.foo = value`.
- `exports = value` does not change what the module exports.

---

## Model 6 — ES Modules

package.json
↓
"type": "module"
↓
.js files are ESM by default
↓
import / export

Extensions:
- `.js` → depends on package `"type"`
- `.mjs` → always ESM
- `.cjs` → always CommonJS

Named export:
```js
export const createGarage = ...
```

Named import:
```js
import { createGarage } from './garage.js';
```

Default export:
```js
export default createGarage;
```

Default import:
```js
import createGarage from './garage.js';
```

- Named exports can be multiple per module.
- A module has one default export.
- Default import names are chosen by the importer.

---

## Model 7 — npm scripts and module resolution

package.json
↓
scripts
↓
npm run <script>

Example:
```json
{
  "scripts": {
    "dev": "node --watch index.js"
  }
}
```

Module specifiers:

Relative:
```js
import x from './garage.js';
```
→ resolve relative to the current module.

Package:
```js
import x from 'some-package';
```
→ resolve as a package through Node's module resolution, typically starting from `node_modules` and potentially searching parent directories.
