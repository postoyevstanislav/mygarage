# Module 1 — Session 2

## Topics

- V8 execution pipeline
- Parser
- AST
- Ignition
- Bytecode
- TurboFan
- JIT Compilation
- Hot Functions
- Deoptimization
- Node Runtime
- globalThis
- process
- process.env
- Environment Variables
- dotenv

## Key Takeaways

- V8 first parses JavaScript into an AST.
- Ignition executes bytecode.
- TurboFan optimizes only hot functions.
- Node.js is a runtime around V8.
- `process.env` comes from the operating system.
- `.env` is **not** a Node.js feature.
- `dotenv` reads `.env` and populates `process.env`.

## Homework

- Install `dotenv`.
- Create a `.env` file.
- Verify that `process.env.DB_PASSWORD` is `undefined` without `dotenv.config()`.
- Verify that it contains the value after calling `dotenv.config()`.