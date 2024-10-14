import {useState, useRef} from 'react';

export default function Player() {
  // REF
  const playerName = useRef();  

  // STATE
  const [enteredPlayerName, setEnteredPlayerName] = useState();

  function handleClick(){
    setEnteredPlayerName(playerName.current.value);
    playerName.current.value = '';
  }

  // JSX Code
  return (
    <section id="player">

      {/* Title */}
      <h2>Welcome {enteredPlayerName ?? 'Unknown Entity'}</h2>


      {/* input field */}
      <p>
        <input ref={playerName} type="text" />
        <button onClick={handleClick}>Set Name</button>
      </p>

    </section>
  );
}
