# COURSE_STATE

## Goal
Become a confident Middle Full-Stack Engineer by the end of the year.

## Product
MyGarage

## Current Module
Module 1 — Node.js Fundamentals

## Current Session
Session 5 — Node Core APIs

## Progress
- [x] Session 1 — JavaScript / Runtime / Engine
- [x] Session 2 — V8
- [x] Session 3 — Node.js Event Loop
- [x] Session 4 — Modules & npm
- [ ] Session 5 — Node Core APIs
- [ ] Session 6 — CLI Project

## Session 3 Covered
- `setTimeout(..., 0)` is a minimum delay, not an exact execution time.
- Synchronous JavaScript blocks the main JS thread.
- `fs.readFile()` is asynchronous and does not block JS execution.
- V8 executes JavaScript; Node.js/libuv provide the asynchronous infrastructure.
- Relevant Event Loop phases: `timers`, `poll`, `check`.
- `setTimeout()` → timers.
- I/O callbacks such as `fs.readFile()` → poll-related processing.
- `setImmediate()` → check.
- Top-level `setTimeout(0)` vs `setImmediate()` has no guaranteed order.
- Inside an I/O callback, `setImmediate()` runs before `setTimeout(0)`.
- `process.nextTick()` is not an Event Loop phase and runs before Promise microtasks.
- Promise callbacks use the microtask queue.
- Simplified model: synchronous JS → nextTick → Promise microtasks → Event Loop phases.

## Session 4 Covered
- Node/CommonJS modules use `require()` and `module.exports`.
- `require('./module')` returns the value assigned to `module.exports`.
- `module.exports = value` replaces the exported value.
- `exports.foo = value` adds a property to the existing export object.
- `exports.foo = value` is effectively equivalent to `module.exports.foo = value`.
- `exports = value` does not replace `module.exports`.
- ES Modules use `import` / `export`.
- `"type": "module"` in `package.json` makes `.js` files in that package ESM by default.
- `.mjs` is always ESM; `.cjs` is always CommonJS.
- Named exports use `{}` when importing.
- A module can have multiple named exports.
- A module has one default export.
- Default imports do not use `{}` and the local import name can be chosen by the importer.
- npm `scripts` are command aliases defined in `package.json`.
- `npm run dev` can execute a script such as `node --watch index.js`.
- `./foo.js` is a relative module import; a bare specifier such as `some-package` refers to a package and uses Node module resolution.

## Knowledge Needs Reinforcement
- Node module resolution in more depth.
- Node Core APIs through practical code.
- Exact Event Loop internals and edge cases can be reinforced through practice if needed.

## Next Session
Session 5 — Node Core APIs, practical/code-first.

## Context for New Chat
Continue from Module 1, Session 5.
Do not restart or redesign the roadmap.
The user has 5+ years of commercial development experience; skip beginner explanations unless directly relevant.
Keep explanations concise; avoid repeating frontend concepts the user already knows.
Prefer practical Node-specific differences and code over generic JavaScript/module theory.
