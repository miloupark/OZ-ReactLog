import "./App.css";

// 📘 React - jsx 문법
// 2025-08-06

// 1. Return문 안에 작성해야 한다.
// 2. 두 줄 이상 작성할 경우 소괄호로 묶는다.
// 3. 하나의 최상위 요소로 묶어줘야 한다.
// 4. 중괄호를 사용해서 JavaScript 코드를 작성한다.

function App() {
  const jsCode = "잘 반영되는군요.";
  return (
    <>
      <div>
        <div>함수형 컴포넌트입니다.</div>
        <span>자식입니다.</span>
      </div>
      <div>
        <div>자바스크립트 코드 작성해볼게요.</div>
        <span>{1 + 1}</span>
        <p>{jsCode.split("").join(" ")}</p>
      </div>
    </>
  );
}

export default App;
