# Todo List App

A modern, interactive todo list application built with React 19, TypeScript, and Vite. Features a clean interface with theme switching and task management capabilities.

## Features

- ✅ **Todo List Management** - Add, complete, and remove tasks with status tracking
- 🎨 **Theme Toggle** - Switch between light and dark modes
- 📊 **Task Status** - Track tasks as pending or completed with checkbox interface
- 🎯 **Clean UI** - Modern, responsive design with table-based task display
- 🚀 **Fast Development** - Powered by Vite for instant HMR (Hot Module Replacement)

## Tech Stack

- **React 19** - Latest React version with modern features
- **TypeScript** - Type-safe development
- **Vite** - Next-generation frontend build tool
- **ESLint** - Code quality and consistency
- **CSS3** - Custom styling with theme variables

## Prerequisites

- Node.js 18 or higher
- npm (comes with Node.js)

## Getting Started

### Installation

Clone the repository and install dependencies:

```bash
npm install
```

### Development

Start the development server with hot module replacement:

```bash
npm run dev
```

The application will be available at `http://localhost:5173` (default Vite port).

### Build

Create a production-optimized build:

```bash
npm run build
```

The build output will be in the `dist` directory.

### Preview

Preview the production build locally:

```bash
npm run preview
```

### Linting

Run ESLint to check code quality:

```bash
npm run lint
```

## Docker Deployment

Build and run the application using Docker:

```bash
# Build the Docker image
docker build -t todo-list-app .

# Run the container
docker run -p 3000:3000 todo-list-app
```

The application will be available at `http://localhost:3000`.

The Docker image uses:
- Node 18 Alpine (lightweight base image)
- Single-stage build process
- `serve` for serving static files

## Project Structure

```
├── src/
│   ├── main.tsx              # Application entry point
│   ├── App.tsx               # Main app component with theme management
│   ├── TodoList.tsx          # Todo list component
│   ├── Counter.tsx           # Counter component
│   ├── components/           # Reusable components
│   ├── App.css              # App-specific styles
│   └── index.css            # Global styles and theme variables
├── public/                   # Static assets
├── Dockerfile               # Docker configuration
├── package.json             # Dependencies and scripts
├── tsconfig.json            # TypeScript configuration
├── vite.config.ts           # Vite configuration
└── eslint.config.js         # ESLint configuration
```

## Architecture

- **Entry Point**: `src/main.tsx` renders the React root with StrictMode
- **Theme System**: Theme toggle sets `data-theme` attribute on document root, CSS variables handle styling
- **Component Organization**: Root-level components in `src/`, subdirectory components in `src/components/`
- **Import Paths**: Uses absolute imports from `src/` (e.g., `import { TodoList } from "src/TodoList"`)

## Development Notes

- Built with React 19's latest features and best practices
- TypeScript provides full type safety across the codebase
- Vite ensures fast development with instant HMR
- Theme switching implemented using CSS custom properties
- Task state management using React hooks (useState)

## License

This project is private and not licensed for public use.
