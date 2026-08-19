import { useState } from "react";

function App() {
  const [adjust, setAdjust] = useState(0);

  function handleClickAdjust(integer) {
    setAdjust((prevAdjust) => prevAdjust + integer);
  }

  function handleClickMultiply() {
    setAdjust((prevAdjust) => prevAdjust * 2);
  }

  function handleClickReset() {
    setAdjust(0);
  }

  return (
    <>
      <h2>{adjust}</h2>
      <div id="increments">
        <button onClick={() => handleClickAdjust(-5)}>[-5]</button>
        <button onClick={() => handleClickAdjust(-1)}>[-1]</button>
        <button onClick={handleClickMultiply}>[x2]</button>
        <button onClick={() => handleClickAdjust(1)}>[+1]</button>
        <button onClick={() => handleClickAdjust(5)}>[+5]</button>
      </div>
      <button onClick={handleClickReset}>reset</button>
    </>
  );
}

export default App;
