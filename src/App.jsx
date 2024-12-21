import { useState } from "react"
import { WinnerModal } from "./components/WinnerModal.jsx"
import { Turns } from "./components/Turns.jsx"
import { checkWinner, checkEndGame } from "./utils/board.js"
import { TURNS, WINNER_COMBOS } from './utils/constants.js'
import confetti from "canvas-confetti"
import { Board } from "./components/Board.jsx"
import { resetLocalStorage, saveToLocalStorage } from "./utils/storage.js"


function App() {
  const [board, setBoard] = useState(() => {
    const boardFromLocalStorage = window.localStorage.getItem('board')
    return boardFromLocalStorage 
      ? JSON.parse(boardFromLocalStorage)
      : Array(9).fill(null)
  })
  const [turn, setTurn] = useState(() => {
    const turnFromLocalStorage = window.localStorage.getItem('turn')
    return turnFromLocalStorage 
      ? turnFromLocalStorage
      : TURNS.X
  })
  const [winner, setWinner] = useState(null)  // null: nobody wins

  const updateBoard = (index) => {
    // If you click a fill cell it returns undefined
    if (board[index] || winner) return
    
    // Update the board
    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)

    // Set the new turn
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)

    // Save the game on local storage
    saveToLocalStorage(newBoard, newTurn)

    // Check for a winner
    const newWinner = checkWinner(newBoard, WINNER_COMBOS)
    if (newWinner) {
      confetti()
      setWinner(newWinner)
      resetLocalStorage()
    } else if (checkEndGame(newBoard)) {
      setWinner(false)
    }
  }

  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)
    resetLocalStorage()
  }
  

  return (
    <main className="game">
      <h1 className="title-1">Tic Tac Toe</h1>
      <button type="button" className="reset-btn" onClick={resetGame}>Reset Game</button>
      <Board board={board} updateBoard={updateBoard} />
      <Turns turnState={turn} turnConstant={TURNS} />
      <WinnerModal winner={winner} resetGame={resetGame} />
    </main>
  )
}

export default App