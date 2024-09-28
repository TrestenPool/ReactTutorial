import Gameboard from "./components/Gameboard";
import Log from "./components/Log";
import Player from "./components/Player";
import { useState } from "react";
import { WINNING_COMBINATIONS } from "./winning-combinations.js";
import Gameover from "./components/Gameover.jsx";

const initialGameBoard = Array(3)
  .fill(null)
  .map(() => Array(3).fill(null));

function deriveActivePlayer(gameTurns) {
  let currentPlayer = "X";
  if (gameTurns.length > 0 && gameTurns[0].player === "X") {
    currentPlayer = "O";
  }
  return currentPlayer;
}

function App() {
  const [gameTurns, setGameTurns] = useState([]);

  // gets the current player
  const currentPlayer = deriveActivePlayer(gameTurns);

  // gets the current board
  let gameboard = [...initialGameBoard.map(arr => [...arr])];
  for (const turn of gameTurns) {
    const { square, player } = turn;
    gameboard[square.row][square.col] = player;
  }

  // determines if there was a winner
  let winner = null;
  for (const combination of WINNING_COMBINATIONS) {
    let firstSquareSymbol =
      gameboard[combination[0].row][combination[0].column];
    let secondSquareSymbol =
      gameboard[combination[1].row][combination[1].column];
    let thirdSquareSymbol =
      gameboard[combination[2].row][combination[2].column];

    if (
      firstSquareSymbol &&
      firstSquareSymbol === secondSquareSymbol &&
      firstSquareSymbol === thirdSquareSymbol
    ) {
      winner = firstSquareSymbol;
    }
  }
  const hasDraw = gameTurns.length === 9 && !winner;

  // handle the select square
  function handleSelectSquare(rowIdx, colIdx) {
    setGameTurns((prevTurns) => {
      const currentPlayer = deriveActivePlayer(prevTurns);
      const updatedTurns = [
        { square: { row: rowIdx, col: colIdx }, player: currentPlayer },
        ...prevTurns,
      ];

      return updatedTurns;
    });
  }

  function handleRestart(){
    setGameTurns([])
  }

  return (
    <main>
      <div id="game-container">
        {/* Players */}
        <ol id="players" className="highlight-player">
          <Player
            initialName="Player 1"
            symbol="X"
            isActive={currentPlayer === "X"}
          />
          <Player
            initialName="Player 2"
            symbol="O"
            isActive={currentPlayer === "O"}
          />
        </ol>

        {/* Gameboard */}
        { (winner || hasDraw) && <Gameover winner={winner} restartFunction={handleRestart}/>}
        <Gameboard gameboard={gameboard} onSelectSquare={handleSelectSquare} />

      </div>
      {/* Log */}
      <Log turns={gameTurns} />
    </main>
  );
}

export default App;
