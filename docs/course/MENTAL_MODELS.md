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

Environment Variables

Operating System
↓
process.env
↑
dotenv (.env)  ← local development only

---

## Model 3

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