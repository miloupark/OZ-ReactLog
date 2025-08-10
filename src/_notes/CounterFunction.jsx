import { useState } from "react";
import "../../src/App.css";

function CounterFunction() {
  const [counter, setCounter] = useState(0);

  return (
    <>
      <Count counter={counter} array={[1, 2, 3, "안녕하세요"]} hello={"hello"} />
      <PlusButton setCounter={setCounter} />
      <MinusButton setCounter={setCounter} />
    </>
  );
}

function PlusButton({ setCounter }) {
  return (
    <button
      onClick={() => {
        setCounter((prev) => prev + 1);
      }}
    >
      +
    </button>
  );
}

function MinusButton({ setCounter }) {
  return (
    <button
      onClick={() => {
        setCounter((prev) => prev - 1);
      }}
    >
      -
    </button>
  );
}

function Count({ counter, array, hello }) {
  return <div>counter : {counter}</div>;
}

export default CounterFunction;
