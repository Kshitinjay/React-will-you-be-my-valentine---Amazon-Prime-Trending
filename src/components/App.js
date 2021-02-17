import React, { useState } from "react";
import slides from "../data";
import "../styles/App.css";

const App = () => {
  const [click, setClick] = useState(0);
  const [disabledNext, setDisabledNext] = useState(false);
  const [disabledPrev, setDisabledPrev] = useState(true);
  const [disabledReset, setDisabledReset] = useState(true);

  const handleNext = () => {
    setDisabledPrev(false);
    setDisabledReset(false);
    if (click < 4) {
      setClick(click + 1);
      if (click == 3) {
        setDisabledNext(true);
      }
    }
  };
  const handlePrev = () => {
    setDisabledNext(false);
    if (click > 0) {
      setClick(click - 1);
      if (click == 1) {
        setDisabledPrev(true);
      }
    }
  };

  const handleReset = () => {
    setClick(0);
    setDisabledPrev(true);
    setDisabledNext(false);
    setDisabledReset(true);
  };
  return (
    <>
      <div id="navigation">
        <div id="slide">
          <h1 data-testid="title">{slides[click].title}</h1>
          <p data-testid="text">{slides[click].text}</p>
        </div>

        <button
          onClick={handlePrev}
          data-testid="button-prev"
          disabled={disabledPrev}
        >
          Prev
        </button>
        <button
          onClick={handleNext}
          data-testid="button-next"
          disabled={disabledNext}
        >
          Next
        </button>
        <button
          onClick={handleReset}
          data-testid="button-restart"
          disabled={disabledReset}
        >
          Reset
        </button>
      </div>
    </>
  );
};

export default App;
