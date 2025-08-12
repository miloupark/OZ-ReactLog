import { useState } from "react";
import "../../src/App.css";

function StateChangePri() {
  let [number, setNumber] = useState(0);

  const handler = () => {
    setNumber(number + 1);
  };

  return (
    <>
      number: {number}
      <br />
      <button onClick={handler}>상태 업데이트!</button>
    </>
  );
}

export default StateChangePri;
