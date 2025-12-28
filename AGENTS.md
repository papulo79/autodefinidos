# Agent Guidelines for Autodefinidos Project

## Project Overview
This is a vanilla JavaScript crossword puzzle game with no build tools, frameworks, or testing infrastructure. It runs directly in the browser using plain HTML, CSS, and JavaScript.

## Commands

### Development
```bash
# No build step required - open index.html directly in browser
open index.html  # macOS
xdg-open index.html  # Linux
start index.html  # Windows

# Serve locally (optional, for testing features requiring HTTP)
python -m http.server 8000
# or
npx serve .
```

### Testing
```bash
# No automated tests - manual testing in browser
```

### Linting
```bash
# No linter configured - review code manually
```

## Code Style Guidelines

### Language and Locale
- **Language**: Spanish throughout (comments, variable names, user-facing text)
- **Comments**: Spanish explanations
- **UI Text**: Spanish only

### Naming Conventions
- **Variables/Functions**: camelCase (ej: `estadoJuego`, `generarAutodefinido`)
- **Constants**: UPPERCASE_SNAKE_CASE (ej: `DIRECCION`, `MAX_INTENTOS_GENERACION`)
- **Classes/IDs**: kebab-case in HTML (ej: `modal-entrada`, `btn-verificar`)
- **CSS Classes**: kebab-case (ej: `crucigrama`, `celda-letra`)

### JavaScript Style

#### Imports
- No module system - all code in single file with global scope
- Order: constants → state → event listeners → functions

#### Formatting
- 2-space indentation (JavaScript), 4-space (HTML/CSS)
- Single quotes for strings
- Semicolons required
- Arrow functions for callbacks and short functions
- Named function declarations for main functions

#### Types
- Plain JavaScript - no TypeScript
- Use JSDoc-style comments when type hints would be helpful
- Arrays use bracket notation, objects use literal syntax

#### Functions
- Descriptive Spanish verb-noun names: `renderizarCrucigrama()`, `verificarTodo()`
- Keep functions focused and under 50 lines when possible
- Use section comments to group related functions:
  ```javascript
  // ============================================
  // SECCIÓN NOMBRE
  // ============================================
  ```

#### Error Handling
- `console.error()` for critical failures (ej: generation failures)
- No try/catch - simple fallback logic instead
- User-facing errors use `alert()` or UI feedback

#### State Management
- Single global `estadoJuego` object containing all game state
- Mutable state with direct object manipulation
- Clear state transitions in functions

### HTML/CSS Style

#### HTML
- Semantic HTML5 elements (`header`, `main`, `nav`)
- Spanish IDs and classes matching JavaScript references
- Accessibility: proper labels, focus management for modals

#### CSS
- Mobile-first responsive design
- BEM-like class naming: `.celda.letra`, `.pista-btn.completada-correcta`
- Flexbox and Grid for layouts
- CSS custom properties not currently used
- Media queries for responsive breakpoints at 480px and 768px
- Touch-friendly: `touch-action: manipulation`, adequate tap targets

### DOM Manipulation
- Direct DOM access with `document.getElementById()` and `querySelector()`
- Event delegation not used - direct listeners on elements
- Render functions rebuild content: `innerHTML = ''` then append children
- Dataset attributes for storing element data: `dataset.fila`, `dataset.columna`

### Algorithms
- Backtracking algorithm for crossword generation (líneas 76-171)
- Intersection detection for word placement (líneas 206-252)
- Keep recursion depth controlled with `MAX_INTENTOS_GENERACION`

### File Structure
```
autodefinidos/
├── index.html      # Main HTML structure
├── juego.js        # All game logic (792 lines)
└── estilos.css     # All styling (384 lines)
```

### Best Practices
- Add Spanish section comments for major functionality blocks
- Use constants for magic numbers and configuration
- Keep the dictionary at the top of juego.js
- Focus mobile users - test on small viewports
- Consider performance when modifying DOM - batch operations when possible
