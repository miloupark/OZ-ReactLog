import { useState } from "react";
import "../../src/App.css";

function StateChangeRef() {
  let [array, setArray] = useState([1, 2, 3]);

  const handler = () => {
    const newArray = [...array];
    newArray.push(5);
    setArray(newArray);
  };

  return (
    <>
      array: [{array.join(",")}]
      <br />
      <button onClick={handler}>상태 업데이트!</button>
    </>
  );
}

export default StateChangeRef;
