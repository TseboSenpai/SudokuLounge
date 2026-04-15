# Sudoku

A small Sudoku web app built with React and Vite. The app fetches puzzles from a public Sudoku API and provides a simple UI for solving, checking, resetting, and requesting new puzzles.

**Features**
- Fetches puzzles and solutions from a remote API
- Click or focus a cell and type 1–9 to enter a value
- Read-only prefilled cells from the puzzle
- Check your solution, reset to the puzzle, or load a new puzzle
- Visual helpers: highlight same row/column/box and a celebratory green-fill animation when correct

**Project structure (important files)**
- `src/App.jsx` — main app, game state, and controls
- `src/components/Grid.jsx` — Sudoku grid and cell interactions
- `src/components/Controls.jsx` — buttons: Check, Reset, New Puzzle
- `src/fetch-puzzle.js` — fetches puzzle + solution from the API

Getting started
---------------

Prerequisites
- Node.js (v16+ recommended) and npm

Install dependencies

```bash
npm install
```

Run the dev server

```bash
npm run dev
```

Build for production

```bash
npm run build
```

Preview production build

```bash
npm run preview
```

Lint the code

```bash
npm run lint
```

How to use
----------
- Open the app in the browser (dev server URL shown after `npm run dev`).
- The grid is populated automatically with a fetched puzzle.
- Click or tab to a cell and type a number (1–9). Prefilled cells are read-only.
- Controls:
	- **Check** — compares your board to the solution and displays `Correct!` or `Incorrect, try again!`.
	- **Reset** — restores the board to the original puzzle state.
	- **New Puzzle** — fetches a new puzzle from the API.

Notes about the puzzle source
-----------------------------
The app uses the public endpoint at `https://sudoku-api.vercel.app/api/dosuku` (see `src/fetch-puzzle.js`). If the API is unavailable, the app shows a simple error message. You can replace the endpoint or implement a local puzzle provider if needed.

Development notes
-----------------
- The app is intentionally minimal and implemented with plain React functional components.
- Styling lives in `src/App.css` and `src/index.css`.
- The `Grid` component uses `classnames` to apply conditional classes for highlighting and the green-fill success animation.

Contributing
------------
PRs are welcome. Suggested improvements:
- Add keyboard navigation and number-only input handling
- Add difficulty selection and puzzle caching
- Improve accessibility (ARIA attributes, better focus management)

License
-------
This repository does not include a license file. Add one (for example, MIT) if you intend to open-source the project.

Troubleshooting
---------------
- If the fetch fails, check network connectivity or the API status.
- For ESLint issues, run `npm run lint` and follow the fixer suggestions.

Enjoy solving!
