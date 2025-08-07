import { useState } from "react";
import "../../src/App.css";

function CounterFunction() {
  const [counter, setCounter] = useState(0);
  return (
    <>
      <Count counter={counter} array={[1, 2, 3, "안녕하세요"]} hello={"hello"} />
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
    </>
  );
}

// 부모 컴포넌트에서 자식 컴포넌트로 데이터를 전달할 수 있다 (props)
// 자식 컴포넌트는 props를 구조분해 할당으로 받아 사용할 수 있다
// 숫자, 문자열, 배열 등 다양한 타입의 값을 props로 전달할 수 있다
function Count({ counter, array, hello }) {
  return <div>counter : {counter}</div>;
}

export default CounterFunction;
