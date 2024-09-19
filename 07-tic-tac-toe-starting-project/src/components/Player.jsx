import { useState } from "react";

export default function Player({ initialName, symbol }) {
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, SetIsEditing] = useState(false);

  function handleOnClick() {
    SetIsEditing((editing) => !editing);
  }

  function handleChange(event) {
    setPlayerName(() => event.target.value);
  }

  return (
    <li>
      <span className="player">
        {isEditing ? (
          <>
            <input
              type="text"
              required
              value={playerName}
              onChange={handleChange}
            />
          </>
        ) : (
          <>
            <span className="player-name">{playerName}</span>
          </>
        )}

        <span className="player-symbol">{symbol}</span>
      </span>

      {/* Save/edit button */}
      <button onClick={handleOnClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
