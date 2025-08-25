import { useCounter } from "../../context/counter/counterContext.jsx";
import { Counter } from "./ContextApi.style.js";

export default function ContextApi() {
  const [counter, setCounter] = useCounter();

  return (
    <Counter>
      <p>Counter: {counter}</p>
      <button
        onClick={() => {
          setCounter((prev) => prev + 1);
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          setCounter((prev) => prev - 1);
        }}
      >
        -
      </button>
    </Counter>
  );
}
