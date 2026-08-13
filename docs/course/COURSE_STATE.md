# COURSE_STATE

## Goal
Become a confident Middle Full-Stack Engineer by the end of the year.

## Product
MyGarage

## Current Module
Module 1 — Node.js Fundamentals

## Current Session
Session 3 — Event Loop

## Progress
- [x] Session 1 — JavaScript / Runtime / Engine
- [x] Session 2 — V8
- [x] Session 3 — Node.js Event Loop
- [ ] Session 4 — Modules & npm
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

## Knowledge Needs Reinforcement
- Exact Event Loop internals and edge cases.
- CommonJS vs ES Modules.
- Event Loop details should be reinforced through practical code, not another theory-only session.

## Next Session
Session 4 — Modules & npm, practical/code-first.

## Context for New Chat
Continue from Module 1, Session 4.
Do not restart or redesign the roadmap.
The user has 5+ years of commercial development experience; skip beginner explanations unless directly relevant.
