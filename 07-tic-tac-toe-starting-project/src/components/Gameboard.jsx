import Player from "./Player";

// more dynamic if I wanted a different size board
const initialGameBoard = Array(3)
  .fill(null)
  .map(() => Array(3).fill(null));

// const initialGameBoard = [
//   [null, null, null],
//   [null, null, null],
//   [null, null, null]
// ]

export default function Gameboard({ turns, onSelectSquare, ...props }) {
  /*
    Here we are deriving state from our props
  */
  // setting gameboard to default then setting the values based on what is selected from the log
  let gameboard = initialGameBoard;
  for (const turn of turns) {
    const { square, player } = turn;
    gameboard[square.row][square.col] = player;
  }

  return (
    <>
      <ol id="game-board">
        {gameboard.map((row, rowIdx) => (
          <li key={rowIdx}>
            <ol>
              {row.map((playerSymbol, colIdx) => (
                <li key={colIdx}>
                  <button
                    onClick={() => onSelectSquare(rowIdx, colIdx)}
                    disabled={playerSymbol != undefined}
                  >
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
