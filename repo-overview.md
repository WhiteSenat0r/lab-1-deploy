# Repository Overview

This repository contains a **Todo List** web application built with React and TypeScript, bundled with Vite.

## Tech Stack

- **React** 19 - UI library
- **TypeScript** 5.7 - Type-safe JavaScript
- **Vite** 6 - Build tool and development server
- **ESLint** 9 - Code linting with React Hooks and React Refresh plugins

## Project Structure

### Components

- **`src/App.tsx`** - Root application component. Provides a light/dark theme toggle, a secret button, and renders the TodoList.
- **`src/TodoList.tsx`** - Core todo list component. Supports adding, removing, and toggling the completion status of tasks displayed in a table.
- **`src/Counter.tsx`** - Counter component with increment, decrement, and reset controls. Values are clamped between -1000 and 1000 with direct input support.
- **`src/components/clicker.tsx`** - Click counter component that reveals a surprise message after reaching a configurable threshold.
- **`src/components/clicker.constants.ts`** - Constants for the Clicker component, including the surprise threshold value.

### Entry Points

- **`index.html`** - HTML entry point for the Vite application.
- **`src/main.tsx`** - Application bootstrap file that mounts the React root component.

### Styles

- **`src/App.css`** - Styles for the App component, including theme toggle and todo table styling.
- **`src/index.css`** - Global base styles for the application.

### Assets

- **`public/vite.svg`** - Vite logo served as a static asset.
- **`src/assets/react.svg`** - React logo used within the application.

### Configuration

- **`package.json`** - Project metadata, scripts (`dev`, `build`, `lint`, `preview`), and dependency declarations.
- **`package-lock.json`** - Locked dependency tree for reproducible installs.
- **`vite.config.ts`** - Vite build and development server configuration.
- **`tsconfig.json`** - Root TypeScript configuration with project references.
- **`tsconfig.app.json`** - TypeScript configuration for the application source code.
- **`tsconfig.node.json`** - TypeScript configuration for Node-based tooling (Vite config).
- **`eslint.config.js`** - ESLint flat configuration with TypeScript and React plugins.

### Infrastructure

- **`Dockerfile`** - Multi-stage Docker build that compiles the application and serves the production bundle via `serve` on port 3000.

### Other

- **`.gitignore`** - Specifies files and directories excluded from version control.
- **`README.md`** - Project readme file.
- **`CLAUDE.md`** - Configuration file for Claude AI assistant context.
- **`src/vite-env.d.ts`** - Vite client type declarations for TypeScript.
