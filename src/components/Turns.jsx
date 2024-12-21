import propTypes from 'prop-types'
import { Square } from "./Square"

export const Turns = ({ turnState, turnConstant }) => {
  return (
    <section className="turn">
      <Square 
        isSelected={turnState === turnConstant.X}
        isForTurns={true}
      >
        {turnConstant.X}
      </Square>
      <Square
        isSelected={turnState === turnConstant.O}
        isForTurns={true}
      >
        {turnConstant.O}
      </Square>
    </section>
  )
}

Turns.propTypes = {
  turnState: propTypes.string.isRequired,
  turnConstant: propTypes.object.isRequired,
}