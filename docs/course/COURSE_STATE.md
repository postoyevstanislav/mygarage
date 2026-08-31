# COURSE_STATE

## Goal
Become a confident Middle Full-Stack Engineer by the end of the year.

## Product
MyGarage

## Current Module
Module 1 — Node.js Fundamentals

## Current Session
Session 6 — CLI Project ✅ Completed

## Progress
- [x] Session 1 — JavaScript / Runtime / Engine
- [x] Session 2 — V8
- [x] Session 3 — Node.js Event Loop
- [x] Session 4 — Modules & npm
- [x] Session 5 — Node Core APIs
- [x] Session 6 — CLI Project
- [ ] Session 7 — HTTP Fundamentals

## Knowledge Confirmed
- JavaScript is a language.
- Runtime provides Host APIs.
- Engine executes JavaScript.
- Browser and Node expose different APIs.
- V8 parses JavaScript into an AST.
- Ignition executes bytecode.
- TurboFan optimizes hot functions.
- Node.js is a runtime built around V8.
- `process.cwd()` returns the directory from which the Node process was started.
- `__dirname` returns the directory containing the current CommonJS module.
- `process.argv` contains command-line arguments.
- `path.join()` builds OS-aware filesystem paths.
- `fs/promises` provides Promise-based filesystem APIs.
- `fs.readFile()` without encoding returns a `Buffer`.
- `fs.readFile(..., 'utf-8')` returns a string.
- `JSON.parse()` converts JSON text into JavaScript data.
- `JSON.stringify()` converts JavaScript data into JSON text.
- `fs.writeFile()` writes/replaces file contents.
- `fs.mkdir(..., { recursive: true })` can create nested directories.
- `fs.readdir()` lists directory contents.
- `readdir(..., { withFileTypes: true })` returns `Dirent` objects.
- `Dirent.isFile()` and `Dirent.isDirectory()` identify entry types.
- `fs.stat()` returns information about a specific filesystem path.
- `Stats.isFile()`, `Stats.isDirectory()`, and `Stats.size` provide path metadata.
- Filesystem errors expose codes such as `ENOENT`.
- `try/catch` can handle errors from awaited Promise-based filesystem operations.
- In CommonJS, top-level `await` is not available; async code can be wrapped in an async function.
- `process.argv` user arguments begin at index 2 and are strings.
- `fs.mkdir(..., { recursive: true })` is idempotent for an existing directory.
- `readFile → JSON.parse → JavaScript data` is the JSON reading flow.
- `JSON.stringify → writeFile` is the JSON writing flow.
- `filter()` returns a new array and is suitable for removing items by condition.
- CLI values from `process.argv` need normalization when a number is expected.
- Stable IDs are preferable to array indexes for identifying entities.
- A simple CLI ID strategy can use `Math.max(...cars.map(car => car.id)) + 1`, with `1` for an empty list.
- Synchronous execution does not automatically eliminate race conditions between separate processes.
- A `read → modify → write` sequence is not atomic and can lose updates when concurrent processes interleave.
- `readCars()` should return parsed car data.
- `saveCars(cars)` should be responsible only for serializing and persisting the provided array.
- `filter()` can be used for case-insensitive partial name search.

## Needs Reinforcement
- CommonJS vs ES Modules
- Node module resolution in more depth
- Event Loop internals and edge cases can be reinforced through practice

## Active Homework
None.

## Completed Session 6 — CLI Project
Built a small MyGarage CLI using Node Core APIs and JSON file storage.

Commands practiced:
- `add <car name>`
- `list`
- `find <name>`
- `remove <id>`

Key implementation ideas:
- Ensure the data directory exists with `fs.mkdir(..., { recursive: true })`.
- Read cars through a reusable `readCars()` function.
- Persist cars through a reusable `saveCars(cars)` function.
- Generate stable numeric IDs.
- Remove cars with `filter()`.
- Search car names case-insensitively with `toLowerCase()` + `includes()`.
- Use `await` when consuming async functions that return Promises.
- Treat missing `cars.json` as an expected initial state for `add`.

## Important Discussion From Session 6
- `mkdir(..., { recursive: true })` does not create a new directory on every run; if the directory exists, it succeeds without recreating it.
- Without `recursive: true`, attempting to create an existing directory throws `EEXIST`.
- `writeFile()` does overwrite the file, but `read → modify → write` preserves previous data by writing the updated full array.
- `ENOENT` from `readFile()` after ensuring the parent directory exists means the JSON file itself is missing.
- `readCars()` is async, so `readCars()` returns `Promise<Array>`, while `await readCars()` gives the array.
- `saveCars()` should not know about the `add` operation; it should only save the supplied data.
- A race condition can occur when two processes both read the same old data, modify independently, and then write; the last write can overwrite the other update.
- `writeFileSync()` would block its own process but would not make the cross-process read-modify-write sequence atomic.

## Next Session
Session 7 — HTTP Fundamentals.

## Context for New Chat
Continue from Module 1 / Session 7.
Do not restart or redesign the roadmap.
Session 6 is complete.
Start Session 7 with HTTP fundamentals and continue the same practical, code-first style.
Prefer student answers before showing complete solutions.
