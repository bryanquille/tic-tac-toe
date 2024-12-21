export const checkWinner = (boardToCheck, winnerCombosArray) => {
    // Check for all posible combos
    for (const combo of winnerCombosArray) {
      const [a, b, c] = combo
      if (
        boardToCheck[a] &&
        boardToCheck[a] === boardToCheck[b] &&
        boardToCheck[a] === boardToCheck[c]
      ) {
        return boardToCheck[a]
      }
    }
    // Return null if nobody wins
    return null
  }

  // Check the end of the game
  export const checkEndGame = (boardToCheck) => {
    return boardToCheck.every(cell => cell !== null)
  }