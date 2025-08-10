import { useState } from "react";
import "../../src/App.css";

function CounterFunction() {
  const [counter, setCounter] = useState(0);
  const [inputValue, setInputValue] = useState(0);

  const incrementCounter = () => {
    setCounter((prev) => prev + 1);
  };

  const decrementCounter = () => {
    setCounter((prev) => prev - 1);
  };

  const setCounterNumber = () => {
    setCounter(inputValue);
  };

  return (
    <>
      <Count counter={counter} />
      <PlusButton incrementCounter={incrementCounter} />
      <MinusButton decrementCounter={decrementCounter} />
      <CounterInput
        inputValue={inputValue}
        setInputValue={setInputValue}
        setCounterNumber={setCounterNumber}
      />
    </>
  );
}

function CounterInput({ inputValue, setInputValue, setCounterNumber }) {
  return (
    <>
      <input
        type="number"
        value={inputValue}
        onChange={(event) => {
          setInputValue(Number(event.target.value));
        }}
      />
      <button onClick={setCounterNumber}>입력</button>
    </>
  );
}

function PlusButton({ incrementCounter }) {
  return <button onClick={incrementCounter}>+</button>;
}

function MinusButton({ decrementCounter }) {
  return <button onClick={decrementCounter}>-</button>;
}

function Count({ counter }) {
  return <div>counter : {counter}</div>;
}

export default CounterFunction;
