import { useState, useCallback, useEffect } from 'react';
import './App.css';
import Grid from './components/Grid';
import Controls from './components/Controls';
import Hero from './components/Hero';
import { fetchPuzzle } from './fetch-puzzle';

function App() {
  const [view, setView] = useState('hero'); // 'hero' | 'game'

  const [board, setBoard] = useState(
    Array(9).fill(null).map(() => Array(9).fill(null))
  );
  const [puzzle, setPuzzle] = useState(
    Array(9).fill(null).map(() => Array(9).fill(null))
  );
  const [solution, setSolution] = useState(
    Array(9).fill(null).map(() => Array(9).fill(null))
  );
  const [selected, setSelected] = useState(null);
  const [greenCount, setGreenCount] = useState(0);
  const [status, setStatus] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    fetchPuzzle({ setError, setStatus, setPuzzle, setSolution, setBoard, setSelected });
  }, []);

  const handleCheck = () => {
    const flatBoard = board.flat();
    const flatSolution = solution.flat();
    if (flatBoard.every((cell, i) => cell === flatSolution[i])) {
      setStatus('Correct!');
      let count = 0;
      const interval = setInterval(() => {
        count++;
        setGreenCount(count);
        if (count === 81) clearInterval(interval);
      }, 30);
    } else {
      setStatus('Incorrect, try again!');
      setGreenCount(0);
    }
  };

  const handleReset = () => {
    setBoard(puzzle.map((row) => [...row]));
    setStatus('');
    setSelected(null);
    setGreenCount(0);
  };

  const handleNewPuzzle = () => {
    setGreenCount(0);
    fetchPuzzle({ setError, setStatus, setPuzzle, setSolution, setBoard, setSelected });
  };

  const handleInput = (rIdx, cIdx, value) => {
    if (value === '' || (value >= 1 && value <= 9)) {
      setBoard((prev) =>
        prev.map((row, r) =>
          row.map((cell, c) => (r === rIdx && c === cIdx ? (value ? parseInt(value) : null) : cell))
        )
      );
    }
  };

  if (error) return <div style={{ color: 'red' }}>{error}</div>;

  return (
    <div className="app-root">

      {/* Hero always stays mounted — video last frame becomes game background */}
      <Hero onEnded={() => setView('game')} />

      {/* Game fades in over the video's last frame */}
      {view === 'game' && (
        <div className="game-overlay">
          <h1 className="game-title">Sudoku</h1>
          <Grid
            board={board}
            handleInput={handleInput}
            puzzle={puzzle}
            selected={selected}
            setSelected={setSelected}
            greenCount={greenCount}
          />
          <Controls
            handleCheck={handleCheck}
            handleReset={handleReset}
            handleNewPuzzle={handleNewPuzzle}
          />
          {status && <div className="status">{status}</div>}
        </div>
      )}

    </div>
  );
}

export default App;
