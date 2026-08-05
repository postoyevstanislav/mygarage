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