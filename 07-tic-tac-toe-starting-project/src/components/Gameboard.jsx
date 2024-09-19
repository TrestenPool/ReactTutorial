import { useState } from "react";

// 3x3 gameboard full of nulls
const initialGameBoard = Array(3).fill(Array(3).fill(null));

export default function Gameboard({ ...props }) {
  const [gameboard, setGameBoard] = useState();

  function handleSelectSquare(rowIndex, colIndex) {
    setGameBoard((prevGameBoard) => {
      prevGameBoard[rowIndex][colIndex] = "X";
      return prevGameBoard;
    });
  }

  return (
    <>
      <ol id="game-board">
        {initialGameBoard.map((row, idx) => (
          <li key={idx}>
            <ol>
              {row.map((playerSymbol, colIdx) => (
                <li key={colIdx}>
                  <button>{playerSymbol}</button>
                </li>
              ))}
            </ol>
          </li>
        ))}
      </ol>
    </>
  );
}
