import Gameboard from "./components/Gameboard";
import Player from "./components/Player";
import { useState } from "react";

function App() {
  const [activePlayer, setActivePlayer] = useState("X");

  function handleSelectSquare() {
    // swap to the next player
    setActivePlayer((oldPlayer) => (oldPlayer === "X" ? "O" : "X"));
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
          playerActive={activePlayer}
          onSelectSquare={() => handleSelectSquare()}
        />
      </div>
      {/* Log */}
      Log
    </main>
  );
}

export default App;
