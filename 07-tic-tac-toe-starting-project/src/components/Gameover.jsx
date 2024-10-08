export default function Gameover({winner, restartFunction}) {
  return <div id="game-over">
    <h2>Game Over!</h2>
    
    {/* Display the winner if there was one */}
    {winner && 
      <p>{winner} won!</p>
    }
    {!winner &&
      <p>It's a DRAW</p>
    }

    <p><button onClick={() => {restartFunction()}}>Rematch!</button></p>
  </div>
}