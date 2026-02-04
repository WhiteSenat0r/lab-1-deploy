# Todo List Application

A modern todo list application with a counter component, built with React 19, TypeScript, and Vite.

## Tech Stack

- **React 19** - UI library with latest features
- **TypeScript** - Type-safe development
- **Vite** - Fast build tool with HMR (Hot Module Replacement)
- **Docker** - Containerized deployment

## Features

### Counter Component
- Increment and decrement functionality
- Direct input support with value validation
- Value limits: -1000 to 1000
- Reset capability

### Todo List Component
- Add new tasks
- Toggle task completion status
- Remove tasks
- Visual table display with styling enhancements

## Getting Started

Install dependencies:
```bash
npm install
```

Start development server:
```bash
npm run dev
```

Build for production:
```bash
npm run build
```

Preview production build:
```bash
npm run preview
```

Run linter:
```bash
npm run lint
```

## Deployment

The application uses Docker with a multi-stage build process. The production build is served using `serve` on port 3000.
