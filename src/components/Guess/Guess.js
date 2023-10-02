import React from "react";
import { range } from "../../utils";

function Guess({ guess }) {
  return (
    <p className="guess">
      {range(5).map((index) => (
        <span className="cell" key={index}>
          {guess === undefined ? "" : guess.substring(index, index + 1)}
        </span>
      ))}
    </p>
  );
}

export default Guess;
