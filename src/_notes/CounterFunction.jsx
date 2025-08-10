import { useState } from "react";
import "../../src/App.css";

function CounterFunction() {
  const [counter, setCounter] = useState(0);

  const incrementCounter = () => {
    setCounter(counter + 1);
  };

  const decrementCounter = () => {
    setCounter(counter - 1);
  };

  return (
    <>
      <Count counter={counter} />
      <PlusButton setCounter={setCounter} incrementCounter={incrementCounter} />
      <MinusButton setCounter={setCounter} decrementCounter={decrementCounter} />
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
