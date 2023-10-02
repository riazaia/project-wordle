import React from "react";
import { range } from "../../utils";
import Guess from "../Guess/Guess";
import { NUM_OF_GUESSES_ALLOWED } from "/src/constants";

function GuessResults({ guesses }) {
  return (
    <div className="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map((index) => {
        return <Guess guess={guesses[index]} key={index} />;
      })}
    </div>
  );
}

export default GuessResults;
