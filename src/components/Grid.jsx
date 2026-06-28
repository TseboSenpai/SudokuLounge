import React from 'react'
import classNames from 'classnames';

// Block b (0–8, row-major), cell k (0–8) → [row, col]
function blockCellToRC(b, k) {
  const row = Math.floor(b / 3) * 3 + Math.floor(k / 3);
  const col = (b % 3) * 3 + (k % 3);
  return [row, col];
}

const Grid = ({ board, handleInput, puzzle, selected, setSelected, greenCount }) => {
  return (
    <div className="board-frame">
      <div className="board-grid">
        {Array.from({ length: 9 }, (_, b) => (
          <div key={b} className="block">
            {Array.from({ length: 9 }, (_, k) => {
              const [rIdx, cIdx] = blockCellToRC(b, k);
              const isPrefilled = puzzle[rIdx][cIdx] !== null;
              const cellIndex = rIdx * 9 + cIdx;
              const isSelected = selected && selected[0] === rIdx && selected[1] === cIdx;
              const isPeer = !isSelected && selected && (
                rIdx === selected[0] ||
                cIdx === selected[1] ||
                (Math.floor(rIdx / 3) === Math.floor(selected[0] / 3) &&
                 Math.floor(cIdx / 3) === Math.floor(selected[1] / 3))
              );

              return (
                <div
                  key={k}
                  className={classNames('cell', {
                    'cell--given': isPrefilled,
                    'cell--selected': isSelected,
                    'cell--peer': isPeer,
                    'green': cellIndex < greenCount,
                  })}
                  onClick={() => setSelected([rIdx, cIdx])}
                >
                  {isSelected && <div className="cell-ring" />}
                  <input
                    type="text"
                    maxLength={1}
                    value={board[rIdx][cIdx] === null ? '' : board[rIdx][cIdx]}
                    readOnly={isPrefilled}
                    onFocus={() => setSelected([rIdx, cIdx])}
                    onClick={() => setSelected([rIdx, cIdx])}
                    onChange={(e) => handleInput(rIdx, cIdx, e.target.value)}
                  />
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Grid;