# MENTAL_MODELS

## JavaScript / Node

JavaScript
    ↓
V8
    ↓
Node.js Runtime
    ↓
Node APIs / libuv
    ↓
OS / I/O

V8 executes JavaScript.
Node.js provides the runtime and APIs.
libuv provides important asynchronous infrastructure.

---

## Event Loop

Synchronous JavaScript
    ↓
process.nextTick
    ↓
Promise microtasks
    ↓
Event Loop phases
    ↓
timers → poll → check → ...

Examples:
- `setTimeout()` → timers
- I/O callbacks → poll-related processing
- `setImmediate()` → check

Important:
- `setTimeout(fn, 0)` does not mean "run immediately".
- Top-level `setTimeout(0)` vs `setImmediate()` has no guaranteed order.
- Inside an I/O callback, `setImmediate()` runs before `setTimeout(0)`.

---

## Async File I/O

Synchronous:
JavaScript → `fs.readFileSync()` → JS waits/blocks → result → continue

Asynchronous:
JavaScript → `fs.readFile()` → Node/libuv handles operation → JS continues → I/O completes → callback/promise continuation

---

## Filesystem Paths

`process.cwd()`
    ↓
directory from which the Node process was started

`__dirname`
    ↓
directory containing the current CommonJS module

Mental model:

terminal location
    ↓
process.cwd()

current JS file location
    ↓
__dirname

`path.join()` builds filesystem paths without manually handling OS-specific separators.

---

## Reading Files

file
    ↓
bytes
    ↓
`fs.readFile(path)`
    ↓
Buffer

or:

file
    ↓
bytes
    ↓
`fs.readFile(path, 'utf-8')`
    ↓
string
    ↓
`JSON.parse()`
    ↓
JavaScript object / array

---

## Writing JSON

JavaScript object / array
    ↓
`JSON.stringify()`
    ↓
JSON string
    ↓
`fs.writeFile()`
    ↓
file

Using `JSON.stringify(data, null, 2)` produces human-readable formatted JSON.

---

## Directory APIs

`fs.mkdir()`
    ↓
create directory

`fs.readdir()`
    ↓
list directory contents

`fs.readdir(path, { withFileTypes: true })`
    ↓
Dirent[]
    ↓
`entry.isFile()` / `entry.isDirectory()`

`fs.stat(path)`
    ↓
Stats
    ↓
information about one specific filesystem path

`stats.isFile()`
`stats.isDirectory()`
`stats.size`

---

## Filesystem Errors

filesystem operation
    ↓
success
or
    ↓
Promise rejection
    ↓
`try/catch`

Common code:

`ENOENT`
    ↓
file or directory does not exist

Principle:
Handle an error where you know what to do with it.
If the error is not handled at that level, rethrow it.

---

## CommonJS Async Boundary

CommonJS
    ↓
no top-level `await`
    ↓
wrap async work in an async function
    ↓
`await`
