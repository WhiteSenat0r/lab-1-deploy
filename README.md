# Todo List Application

A modern todo list application with theme toggle and interactive features, built with React 19, TypeScript, and Vite.

## Tech Stack

- **React 19** - UI library with latest features
- **TypeScript** - Type-safe development
- **Vite** - Fast build tool with HMR (Hot Module Replacement)
- **Docker** - Containerized deployment

## Features

### Active Features

#### Theme Toggle
- Switch between light and dark modes
- Persistent theme application across the application
- Clean UI toggle button

#### Secret Button
- Easter egg feature for user interaction

#### Todo List
- **Add Tasks:** Create new todo items using text input field
- **Mark Complete:** Toggle task completion status using interactive checkboxes
- **Delete Tasks:** Remove individual tasks with dedicated remove buttons
- **Table View:** Organized display with dynamic styling based on content
- **Status Tracking:** Clear visual indicators showing Pending or Completed state

### Available Components (Not Currently Rendered)

#### Counter Component
- Increment and decrement functionality
- Direct input support with value validation
- Value limits: -1000 to 1000
- Reset capability

#### Clicker Component
- Click counter with interactive button
- Surprise feature at threshold
- Real-time click count display

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
