import { useState, useRef } from "react";

export default function Player() {

  const [enteredPlayerName, setEnteredPlayerName] = useState(null);
  const playerNameRef = useRef();

  const setNameHandler = () => {
    if (playerNameRef.current.value.trim().length === 0) {
      setEnteredPlayerName(null);
    } else {
      setEnteredPlayerName(playerNameRef.current.value);
      playerNameRef.current.value = '';
    }
  }


  return (
    <section id="player">
      <h2>Welcome {enteredPlayerName ?? 'unknown entity'}</h2>
      <p>
        <input ref={playerNameRef} type="text" />
        <button onClick={setNameHandler}>Set Name</button>
      </p>
    </section>
  );
}
