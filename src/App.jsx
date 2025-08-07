import { useState } from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);
  return (
    <>
      <div>counter : {counter}</div>
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          setCounter(counter - 1);
        }}
      >
        -
      </button>
    </>
  );
}

export default App;
