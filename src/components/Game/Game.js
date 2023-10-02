import React from "react";
import { WORDS } from "../../data";
import { sample } from "../../utils";
import DisplayGuesses from "../DisplayGuess/DisplayGuesses";
import GuessInput from "../GuessInput/GuessInput";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);

  return (
    <>
      <DisplayGuesses guesses={guesses} />
      <GuessInput guesses={guesses} setGuesses={setGuesses} />
    </>
  );
}

export default Game;
