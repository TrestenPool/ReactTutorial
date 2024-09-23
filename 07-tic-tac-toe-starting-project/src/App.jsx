import Gameboard from "./components/Gameboard";
import Log from "./components/Log";
import Player from "./components/Player";
import { useState } from "react";

function App() {
  const [gameTurns, setGameTurns] = useState([])
  const [activePlayer, setActivePlayer] = useState("X");

  function handleSelectSquare(rowIdx, colIdx) {
    // change the active player
    setActivePlayer((oldPlayer) => (oldPlayer === "X" ? "O" : "X"));

    // add to the game turns
    setGameTurns((prevTurns) => {
      // get the current players
      let currentPlayer = "X";
      if (prevTurns.length > 0 && prevTurns[0].player === "X") {
        currentPlayer = "O";
      }
      // make a new array with the newly added turn
      const updatedTurns = [
        { square: { row: rowIdx, col: colIdx }, player: activePlayer },
        ...prevTurns,
      ];

      // return the newly created array
      return updatedTurns;
    });
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            initialName="Player 1"
            symbol="X"
            isActive={activePlayer === "X"}
          />
          <Player
            initialName="Player 2"
            symbol="O"
            isActive={activePlayer === "O"}
          />
        </ol>

        {/* Gameboard */}
        <Gameboard
          turns={gameTurns}
          onSelectSquare={handleSelectSquare}
        />
      </div>
      {/* Log */}
      <Log turns={gameTurns} />
    </main>
  );
}

export default App;
