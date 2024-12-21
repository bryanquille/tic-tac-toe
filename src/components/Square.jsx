import propTypes from 'prop-types'

export const Square = ({ index, updateBoard, isSelected, isForTurns, children }) => {
  const handleClick = () => {
    updateBoard()
  }
  return (
    <button 
      type='button' 
      className={`cell ${isSelected ? "selected-turn" : ""} ${isForTurns && 'disabled-cell'}`} 
      onClick={handleClick} 
      id={index}
      disabled={isForTurns}
    >
      {children}
    </button>
  )
}

Square.propTypes = {
    index: propTypes.number,
    updateBoard: propTypes.func,
    isSelected: propTypes.bool,
    isForTurns: propTypes.bool,
    children: propTypes.any,
}