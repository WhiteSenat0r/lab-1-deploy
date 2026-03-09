# Todo List App

A simple todo-list single-page application built with React 19, TypeScript, and Vite. Features include adding, removing, and toggling completion status of tasks, as well as light/dark theme switching.

## Tech Stack

- **React 19** with React DOM
- **TypeScript** (~5.7) with strict mode
- **Vite 6** for development and bundling
- **ESLint 9** with flat config, typescript-eslint, react-hooks, and react-refresh plugins

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or later recommended)
- npm

### Installation

```bash
npm install
```

### Development Server

```bash
npm run dev
```

Starts the Vite dev server with hot module replacement.

## Available Scripts

| Command             | Description                                |
| ------------------- | ------------------------------------------ |
| `npm run dev`       | Start the Vite development server          |
| `npm run build`     | Type-check with `tsc -b` and build for production |
| `npm run lint`      | Run ESLint across the project              |
| `npm run preview`   | Preview the production build locally       |

## Project Structure

```
├── index.html                  # HTML entry point
├── src/
│   ├── main.tsx                # Application entry, renders App in StrictMode
│   ├── App.tsx                 # Root component with theme toggle, renders TodoList
│   ├── App.css                 # App-level styles
│   ├── index.css               # Global styles
│   ├── TodoList.tsx            # Main todo list (add/remove/toggle tasks)
│   ├── Counter.tsx             # Standalone counter component (not mounted)
│   ├── components/
│   │   ├── clicker.tsx         # Standalone clicker component (not mounted)
│   │   └── clicker.constants.ts# Constants for the clicker component
│   ├── assets/
│   │   └── react.svg           # React logo asset
│   └── vite-env.d.ts           # Vite type declarations
├── public/
│   └── vite.svg                # Vite logo (favicon)
├── Dockerfile                  # Docker build and serve configuration
├── vite.config.ts              # Vite configuration
├── tsconfig.json               # TypeScript project references
├── tsconfig.app.json           # TypeScript config for app source
├── tsconfig.node.json          # TypeScript config for Node tooling
├── eslint.config.js            # ESLint flat configuration
└── package.json                # Project metadata and dependencies
```

## Features

- **Todo Management** -- Add, remove, and toggle completion status of tasks
- **Theme Toggle** -- Switch between light and dark themes (applied via `data-theme` attribute on `<html>`)
- **Responsive Table** -- Tasks displayed in a table with conditional styling when more than two items are present

## Docker

Build and run the application in a Docker container:

```bash
# Build the image
docker build -t vite-react-app .

# Run the container
docker run -p 3000:3000 vite-react-app
```

The app will be served on port **3000** using the `serve` static file server.

## TypeScript Configuration

- Strict mode enabled
- `noUnusedLocals` and `noUnusedParameters` enforced (unused variables/parameters cause build errors)
- Target: ES2020 with bundler module resolution
