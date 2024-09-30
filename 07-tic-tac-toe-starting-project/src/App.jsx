import Gameboard from "./components/Gameboard";
import Log from "./components/Log";
import Player from "./components/Player";
import { useState } from "react";
import { WINNING_COMBINATIONS } from "./winning-combinations.js";
import Gameover from "./components/Gameover.jsx";

const initialGameBoard = Array(3)
  .fill(null)
  .map(() => Array(3).fill(null));

/**********************************************************/
/******************* HELPER FUNCTIONS *********************/
/**********************************************************/
function deriveWinner(gameboard, players) {
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
      // winner = firstSquareSymbol;
      winner = players[firstSquareSymbol];
    }
  }

  return winner;
}

function deriveGameboard(initialGameBoard, gameTurns) {
  let gameboard = [...initialGameBoard.map((arr) => [...arr])];
  for (const turn of gameTurns) {
    const { square, player } = turn;
    gameboard[square.row][square.col] = player;
  }
  return gameboard;
}

function deriveActivePlayer(gameTurns) {
  let currentPlayer = "X";
  if (gameTurns.length > 0 && gameTurns[0].player === "X") {
    currentPlayer = "O";
  }
  return currentPlayer;
}

/**********************************************************/
/*********************** APP FUNCTION *********************/
/**********************************************************/
function App() {
  const [players, setPlayers] = useState({
    X: "Player 1",
    O: "Player 2",
  });
  const [gameTurns, setGameTurns] = useState([]);

  /**********************************************************/
  /********************* DERIVING STATE *********************/
  /**********************************************************/
  const currentPlayer = deriveActivePlayer(gameTurns);
  const gameboard = deriveGameboard(initialGameBoard, gameTurns);
  const winner = deriveWinner(gameboard, players);
  const hasDraw = gameTurns.length === 9 && !winner;

  /**********************************************************/
  /******************* HANDLE FUNCTIONS *********************/
  /**********************************************************/
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

  function handleRestart() {
    setGameTurns([]);
  }

  function handlePlayerNameChange(symbol, newName) {
    setPlayers((prevPlayers) => {
      return {
        ...prevPlayers,
        [symbol]: newName,
      };
    });
  }

  /**********************************************************/
  /************************ JSX Code ************************/
  /**********************************************************/
  return (
    <main>
      <div id="game-container">
        {/* Players */}
        <ol id="players" className="highlight-player">
          <Player
            initialName="Player 1"
            symbol="X"
            isActive={currentPlayer === "X"}
            onChangeName={handlePlayerNameChange}
          />
          <Player
            initialName="Player 2"
            symbol="O"
            isActive={currentPlayer === "O"}
            onChangeName={handlePlayerNameChange}
          />
        </ol>

        {/* Gameboard */}
        {(winner || hasDraw) && (
          <Gameover winner={winner} restartFunction={handleRestart} />
        )}
        <Gameboard gameboard={gameboard} onSelectSquare={handleSelectSquare} />
      </div>
      {/* Log */}
      <Log turns={gameTurns} />
    </main>
  );
}

export default App;
