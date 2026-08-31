# SESSION 6 — CLI Project

## Status
Completed.

## Goal
Build a practical MyGarage CLI using Node.js Core APIs and JSON file storage.

## Commands
- `node garage.js add "<car name>"`
- `node garage.js list`
- `node garage.js find <name>`
- `node garage.js remove <id>`

## Concepts Practiced

### CLI arguments
`process.argv` is an array:
- index `0` — Node executable
- index `1` — script path
- index `2+` — user arguments

CLI arguments arrive as strings, so values such as IDs need normalization with `Number()` when the domain expects numbers.

### JSON file storage
Read flow:
`readFile(..., 'utf-8') → JSON.parse() → JavaScript data`

Write flow:
`JavaScript data → JSON.stringify() → writeFile()`

`JSON.stringify(data, null, 2)` keeps the JSON human-readable.

### Directory initialization
`fs.mkdir(path.dirname(PATH_TO_CARS_JSON), { recursive: true })` ensures the parent data directory exists.

`recursive: true` does not recreate an existing directory. Without it, creating an already-existing directory throws `EEXIST`.

### Reusable storage functions
`readCars()` is responsible for reading and parsing the cars JSON.

`saveCars(cars)` is responsible only for serializing and writing the supplied cars array.

This separates storage responsibilities from operations such as add/list/find/remove.

### Add
`add`:
1. ensures the data directory exists;
2. reads existing cars;
3. generates a stable numeric ID;
4. appends the new car;
5. saves the updated array.

If `cars.json` does not exist, it is treated as an expected initial state and the file is created with the first car.

Simple ID strategy:
- empty array → ID `1`;
- otherwise → `Math.max(...cars.map(car => car.id)) + 1`.

This is preferable to `cars.length + 1` because IDs should not depend on the current array length.

### List
`list` reads the cars and prints each car's stable ID and name.

### Find
`find` searches by car name using a case-insensitive partial match:

`car.name.toLowerCase().includes(name.toLowerCase())`

The real car ID is displayed rather than the filtered-array index.

### Remove
`remove` converts the CLI ID to a number and uses `filter()` to create a new array without the matching car.

If the resulting array is shorter, a car was removed; otherwise the CLI reports that the requested ID was not found.

### Async / await
An async function such as `readCars()` returns a Promise.

`readCars()` → `Promise<Array<Car>>`

`await readCars()` → `Array<Car>`

Forgetting `await` means the caller receives the Promise instead of the resolved array.

### Error handling
`ENOENT` can represent a missing file or directory.

After ensuring the parent directory exists, `ENOENT` from `readCars()` means `cars.json` is missing.

Errors should be handled where there is a meaningful action; otherwise they should be allowed to propagate.

### Race condition
A `read → modify → write` sequence is not atomic.

Two concurrent processes can both read the same old data, modify it independently, and then write their own versions. The last write can overwrite the other update.

`writeFileSync()` would block its own process, but would not make a multi-process read-modify-write sequence atomic.

## Architecture Learned

```text
CLI command
    ↓
domain operation
    ↓
readCars() / saveCars()
    ↓
JSON file
```

This is intentionally a small practice architecture that prepares the course for HTTP, Express, PostgreSQL, Prisma, and eventually NestJS.

## Mini Quiz Result
Session completed successfully.

Important clarifications:
- `readFile(..., 'utf-8')` returns a string, not a JSON object.
- `readCars()` returns a Promise, not an array of Promises.
- Stable entity IDs identify cars; array indexes only identify current positions.

## Homework
Implemented `findCarByName()` with case-insensitive partial name matching.

## Next
Session 7 — HTTP Fundamentals.
