import propTypes from 'prop-types'
import { Square } from './Square'

export const Board = ({ board, updateBoard }) => {
  return (
    <section className="board">
      {
        board.map((cell, index) => {
          return (
            <Square 
              key={index}
              index={index}
              updateBoard={() => updateBoard(index)}
            >
              {cell}
            </Square>
          )
        })
      }
    </section>
  )
}

Board.propTypes = {
  board: propTypes.array.isRequired,
  updateBoard: propTypes.func.isRequired,
}