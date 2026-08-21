# Module 1 — Session 5

## Topics

- Node Core APIs
- `process.cwd()` vs `__dirname`
- `process.argv`
- `path.join()`
- `path.parse()`
- `fs/promises`
- `fs.readFile()`
- `fs.writeFile()`
- `Buffer`
- JSON file storage
- `fs.mkdir()`
- `fs.readdir()`
- `Dirent`
- `fs.stat()`
- `Stats`
- Filesystem error codes
- `ENOENT`
- `try/catch` with async filesystem operations
- Top-level `await` vs CommonJS

## Key Takeaways

- `process.cwd()` is the directory from which the Node process was started.
- `__dirname` is the directory containing the current CommonJS module.
- These paths can be identical when the process is started from the module's directory, but they can differ when a file is launched from another directory.
- `path.join()` should be used to build filesystem paths instead of manually concatenating separators.
- `fs/promises` provides Promise-based filesystem operations.
- `fs.readFile(path)` without an encoding returns a `Buffer`.
- `fs.readFile(path, 'utf-8')` returns a string.
- JSON text must still be converted with `JSON.parse()` before it becomes JavaScript data.
- `JSON.stringify()` converts JavaScript data back into JSON text before writing it to a file.
- `fs.mkdir(path, { recursive: true })` can create nested directory structures.
- `fs.readdir()` returns directory contents.
- `withFileTypes: true` makes `readdir()` return `Dirent` objects, allowing `isFile()` and `isDirectory()`.
- `fs.stat(path)` is used to inspect one specific filesystem path.
- `Stats.size` is a property; `isFile()` and `isDirectory()` are methods.
- Filesystem errors expose codes such as `ENOENT`.
- A useful pattern is to handle known errors and rethrow unknown errors.
- In CommonJS, top-level `await` is not available; async code can be placed inside an async function.

## Practical Work

Implemented and reviewed:

- Reading `cars.json`
- Parsing JSON
- Adding a car
- Writing the updated JSON file
- Handling missing `cars.json` with `ENOENT`
- Creating `cars`, `users`, and `uploads` storage directories
- Listing directories using `readdir()` with `withFileTypes`
- Inspecting a path with `stat()`
- Building a combined storage information object

## Important Mistakes / Reinforcement

- `for...in` iterates keys/indexes; `for...of` iterates values.
- `stats.size` is a property, not a function.
- `fs.stat()` from `fs/promises` is asynchronous and must be awaited.
- `path.basename()` returns a string; it does not provide a `.name` property.
- `path.parse(filePath).name` gives the filename without its extension.
- `{ key: value }` uses the literal property name `key`; `{ [key]: value }` uses the value of the variable as the property name.
- Do not catch an error only to immediately `throw` it again without adding handling or context.
- In CommonJS, use an async function boundary when `await` is needed at the top level.

## Mini Quiz Result

- `process.cwd()` vs `__dirname`: understood.
- `readdir()` with `withFileTypes`: understood.
- `ENOENT` and `try/catch`: understood.
- `readFile()` encoding distinction needs reinforcement:
  - no encoding → `Buffer`
  - `'utf-8'` → string
  - `JSON.parse()` → JavaScript object/array
- CommonJS top-level `await` needs reinforcement.

## Homework

None.

## Next Session

Session 6 — CLI Project.
