# Module 1 — Session 3

## Topics

- Node.js Event Loop
- Synchronous vs asynchronous execution
- `fs.readFile()` vs `fs.readFileSync()`
- Node.js and libuv
- Event Loop phases: `timers`, `poll`, `check`
- `setTimeout()`
- `setImmediate()`
- `process.nextTick()`
- Promise microtasks
- Ordering of asynchronous callbacks

## Key Takeaways

- `setTimeout(fn, 0)` does not mean that `fn` runs immediately or exactly after 0 ms.
- Synchronous JavaScript blocks the main JavaScript thread.
- `fs.readFile()` allows JavaScript execution to continue while the I/O operation is handled asynchronously.
- V8 executes JavaScript; Node.js and libuv provide the runtime infrastructure for asynchronous operations.
- `setTimeout()` is associated with the timers phase.
- I/O callbacks such as `fs.readFile()` are processed through the poll side of the Event Loop.
- `setImmediate()` is associated with the check phase.
- Top-level `setTimeout(0)` vs `setImmediate()` does not have a guaranteed order.
- When both are scheduled from an I/O callback, `setImmediate()` runs before `setTimeout(0)`.
- `process.nextTick()` is not an Event Loop phase and is processed before Promise microtasks.
- Promise callbacks such as `.then()` use the microtask queue.
- Simplified model:

  synchronous JS → `process.nextTick` → Promise microtasks → Event Loop phases

## Practical Experiments

```js
console.log("start");

setTimeout(() => {
  console.log("timeout");
}, 0);

Promise.resolve().then(() => {
  console.log("promise");
});

process.nextTick(() => {
  console.log("nextTick");
});

console.log("end");
```

Typical order:

```text
start
end
nextTick
promise
timeout
```

I/O example:

```js
const fs = require("node:fs");

fs.readFile(__filename, () => {
  setTimeout(() => console.log("timeout"), 0);

  setImmediate(() => console.log("immediate"));
});
```

Expected order:

```text
immediate
timeout
```

## What We Deliberately Did Not Cover

Deep Event Loop internals and edge cases were intentionally left for practical reinforcement rather than another theory-heavy session.

## Homework

None.

## Next Session

Session 4 — Modules & npm, with a practical/code-first approach. Begin moving toward writing the MyGarage backend.
