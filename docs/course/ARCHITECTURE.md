# ARCHITECTURE

## Vision

MyGarage is a platform where car owners create garages, add cars,
publish ownership stories and modifications, comment and interact.

## Planned Stack

Frontend
- React
- TypeScript
- Material UI

Backend
- Node.js → NestJS

Database
- PostgreSQL

ORM
- Prisma

Infrastructure
- Docker
- GitHub Actions

## Domain

User
└── Garage
    └── Car
        ├── Post
        ├── Photo
        └── Comment

## Planned Architecture

Controller
    ↓
Service
    ↓
Repository
    ↓
Prisma
    ↓
PostgreSQL

## Architecture Decisions (ADR)

ADR-001 Repository Pattern (planned)
ADR-002 JWT Authentication (planned)
ADR-003 NestJS (planned)
