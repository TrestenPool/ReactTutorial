import { useState } from "react";

export default function Player({ name, symbol }) {
  // managing state
  const [isEditing, SetIsEditing] = useState(false);

  function handleOnClick() {
    // flip the flag
    SetIsEditing(!isEditing);
  }

  return (
    <li>
      {/* Show Text field or name/symbol if editing */}
      <span className="player">
        {isEditing ? (
          <>
            <input type="text" value={name} name="inputField" />
          </>
        ) : (
          <>
            <span className="player-name">{name}</span>
          </>
        )}
        <span className="player-symbol">{symbol}</span>
      </span>

      <button onClick={handleOnClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
