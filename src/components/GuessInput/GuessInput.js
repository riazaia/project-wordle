import React from "react";

function GuessInput({ handleSubmitGuess }) {
  const [draftGuess, setDraftGuess] = React.useState("");

  return (
    <form
      className="guess-input-wrapper"
      onSubmit={(event) => {
        event.preventDefault();
        handleSubmitGuess(draftGuess);
        setDraftGuess("");
      }}
    >
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        required
        pattern="[a-zA-Z]{5}"
        title="5 letter word"
        value={draftGuess}
        onChange={(event) => {
          setDraftGuess(event.target.value.toUpperCase());
        }}
      />
    </form>
  );
}

export default GuessInput;
