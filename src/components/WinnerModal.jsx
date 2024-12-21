import propTypes from 'prop-types'
import { Square } from "./Square"

export const WinnerModal = ({ winner, resetGame }) => {
  if (winner === null) return null
  const winnerText = winner === false ? 'Tie!' : 'Winner'
  return (
    <section className="winner-back">
      <div className="winner-modal">
        <h2>
          {winnerText}
        </h2>
        <header className="win">
          {winner && <Square>{winner}</Square>}
        </header>
        <footer>
          <button 
            type="button" 
            className="reset-btn" 
            onClick={resetGame}
          >
            Reset
          </button>
        </footer>
      </div>
    </section>
  )
}

WinnerModal.propTypes = {
    winner: propTypes.any,
    resetGame: propTypes.func,
}