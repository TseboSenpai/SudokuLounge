import PlankButton from './PlankButton'

const Controls = ({ handleCheck, handleReset, handleNewPuzzle }) => {
  return (
    <div style={{ marginTop: 24, display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
      <PlankButton onClick={handleCheck} width={200} height={60}>Check</PlankButton>
      <PlankButton onClick={handleReset} width={200} height={60}>Reset</PlankButton>
      <PlankButton onClick={handleNewPuzzle} width={240} height={60}>New Puzzle</PlankButton>
    </div>
  )
}

export default Controls