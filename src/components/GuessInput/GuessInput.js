import React from "react";

function GuessInput() {
  const [guess, setGuess] = React.useState("");

  return (
    <form
      class="guess-input-wrapper"
      onSubmit={(event) => {
        event.preventDefault();
        console.log({ guess });
        setGuess("");
      }}
    >
      <label for="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        required
        pattern="[A-Z]{5,5}"
        value={guess}
        onChange={(event) => {
          setGuess(event.target.value.toUpperCase());
        }}
      />
    </form>
  );
}

export default GuessInput;
