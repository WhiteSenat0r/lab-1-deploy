# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a browser-based Snake game implementation using vanilla JavaScript, HTML5, and CSS3. The game is hosted on Azure DevOps and follows a feature branch workflow for development.

## Architecture

### Core Components

The application consists of three main files that work together:
- **index.html**: Main HTML structure with game board container, score display, controls, and cookie consent banner
- **main.js**: Game logic implementation using a grid-based system with game loop, collision detection, and input handling
- **styles.css**: Visual styling using CSS Grid for the game board and CSS custom properties for theming

### Game State Management

The game maintains state through global variables in `main.js`:
- Snake position array tracking all segments
- Direction and queued direction (prevents instant reversal)
- Food position
- Score tracking with localStorage persistence for best score
- Game loop using `setInterval` at 150ms tick rate

### Key Design Patterns

1. **Grid System**: 20x20 grid implemented with CSS Grid and JavaScript array tracking
2. **Input Buffering**: Queued direction changes prevent invalid moves during rapid key presses
3. **Collision Detection**: Boundary and self-collision checks before each move
4. **State Persistence**: Best score saved to localStorage with try-catch fallback for unavailable storage

## Development Commands

### Running the Application
```bash
# Open index.html directly in a browser (no build step required)
open index.html  # macOS
xdg-open index.html  # Linux
start index.html  # Windows

# Or use a simple HTTP server for local development
python3 -m http.server 8000
# Then navigate to http://localhost:8000
```

### Git Workflow
```bash
# Create feature branch following naming convention
git checkout -b feature/[task-id]-description

# Common branch patterns:
# - feature/1234 (numeric task ID)
# - feature/ad5-123-description (project prefix + ID)
# - feature/scrum-123 (scrum task)
# - feature/task-SCRUM-123_description (detailed format)
```

## Testing Considerations

Currently no automated tests are implemented. When testing manually:
1. Verify game controls (Arrow keys and WASD)
2. Test collision detection (walls and self-collision)
3. Confirm score persistence across page refreshes
4. Check cookie banner behavior and localStorage consent persistence
5. Test responsive layout on different screen sizes

## Browser Compatibility

The game uses modern web features:
- CSS Grid (requires modern browser support)
- CSS Custom Properties
- localStorage API
- ES6+ JavaScript features (arrow functions, const/let, template literals)

## Azure DevOps Integration

This repository is hosted on Azure DevOps at `dev.azure.com/honeysombsoftware/hb-ai-agent/_git/azure-devops-test-repo`. The project follows a feature branch workflow with multiple active feature branches for different tasks and experiments.