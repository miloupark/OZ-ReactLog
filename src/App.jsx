// App.jsx
import { useState } from "react";
import PropsDrilling from "./components/props-drilling/PropsDrilling";
import styled from "styled-components";

export default function App() {
  const [showDrilling, setShowDrilling] = useState(false);

  return (
    <div>
      <Title>React 상태관리</Title>
      <button onClick={() => setShowDrilling((prev) => !prev)}>
        {showDrilling ? "Close" : "Props Drilling"}
      </button>

      {showDrilling && <PropsDrilling />}
    </div>
  );
}

const Title = styled.h1`
  color: #ffffff;
`;
