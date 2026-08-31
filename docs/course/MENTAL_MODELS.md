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

`EEXIST`
    ↓
resource already exists; commonly encountered when creating an existing directory without `recursive: true`

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

---

## CLI

`node garage.js add "Subaru Impreza"`
    ↓
`process.argv`
    ↓
index 0 = Node executable
index 1 = script path
index 2+ = user arguments

CLI arguments arrive as strings.

Normalize values when the domain expects another type:
`Number(id)` → numeric ID

---

## MyGarage CLI Data Flow

CLI command
    ↓
domain operation
    ↓
readCars() / saveCars()
    ↓
JSON file

`readCars()`
    ↓
readFile
    ↓
JSON.parse
    ↓
Array<Car>

`saveCars(cars)`
    ↓
JSON.stringify
    ↓
writeFile
    ↓
cars.json

---

## IDs vs Indexes

Array index
    ↓
position
    ↓
can change after mutations

Entity ID
    ↓
identity
    ↓
should remain stable

For the simple CLI:
empty array → next ID = 1
otherwise → max existing ID + 1

---

## Race Condition

`read → modify → write`
    ↓
not atomic

Concurrent processes can interleave:

Process A: read old data
Process B: read old data
Process A: write update A
Process B: write update B
    ↓
update A may be lost

Synchronous execution blocks one process/thread during the operation, but does not make a multi-process read-modify-write sequence atomic.

---

## Array Operations Used

`filter()`
    ↓
returns a new array
    ↓
useful for removing items that match a condition

Case-insensitive search:
`value.toLowerCase().includes(query.toLowerCase())`

---

## Architecture Direction

MyGarage planned backend:

Controller
    ↓
Service
    ↓
Repository
    ↓
Prisma
    ↓
PostgreSQL

The CLI is intentionally a small practice application that builds intuition for data flow and separation of responsibilities before moving into HTTP, Express, PostgreSQL, and NestJS.
