import Player from "./Player";

export default function Gameboard({ gameboard, onSelectSquare, ...props }) {
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
