import { useState } from "react";

const initialGameBoard = Array(3).fill(Array(3).fill(null));

export default function Gameboard({ playerActive, onSelectSquare, ...props }) {
  // state management for the board
  const [gameboard, setGameBoard] = useState(initialGameBoard);

  function handleSelectSquare(rowIdx, colIdx) {
    setGameBoard((prevGameBoard) => {
      const updatedBoard = [
        ...prevGameBoard.map((innerArray) => [...innerArray]),
      ];
      updatedBoard[rowIdx][colIdx] = playerActive;
      return updatedBoard;
    });

    // call the prop function that was passed to the component
    onSelectSquare();
  }

  /*
    when you use the set state function the old state will get passed automatically for you to use if you need it
    setStateFunction( (oldstate) => setting new state and can manipulate the old state if needed )
  */

  return (
    <>
      <ol id="game-board">
        {gameboard.map((row, rowIdx) => (
          <li key={rowIdx}>
            <ol>
              {row.map((playerSymbol, colIdx) => (
                <li key={colIdx}>
                  <button onClick={() => handleSelectSquare(rowIdx, colIdx)}>
                    {playerSymbol}
                  </button>
                </li>
              ))}
            </ol>
          </li>
        ))}
      </ol>
    </>
  );
}
