import { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";

function App() {
  const [input1, setInput1] = useState(0);
  const [input2, setInput2] = useState(0);
  const [input3, setInput3] = useState(0);
  const [input4, setInput4] = useState(1);

  return (
    <>
      <GlobalStyle />
      <h1>Styled-Components</h1>
      <SubTitle>💡 Button props</SubTitle>
      <Container>
        {/* BlueButton */}
        <BlueButton>BlueButton</BlueButton>
        <PropsButton
          backgroundColor="blue"
          textColor="white"
          padding="10px"
          radius="8px"
          margin="10px"
        >
          PropsButton
        </PropsButton>
        {/* LargeBlueButton */}
        <LargeBlueButton>LargeBlueButton</LargeBlueButton>
        <PropsButton
          backgroundColor="blue"
          textColor="white"
          padding="20px"
          radius="8px"
          margin="10px"
          width="300px"
        >
          PropsButton
        </PropsButton>
        {/* LargeTextBlueButton */}
        <LargeTextBlueButton>LargeTextBlueButton</LargeTextBlueButton>
        <PropsButton
          backgroundColor="blue"
          textColor="white"
          padding="20px"
          radius="8px"
          margin="10px"
          width="300px"
          fontSize="24px"
          fontWeight="800"
        >
          PropsButton
        </PropsButton>
      </Container>

      <SubTitle>💡 RGB props</SubTitle>
      <Container>
        {/* input */}
        <BackgroundColorDiv input1={input1} input2={input2} input3={input3} input4={input4} />
        <input
          type="range"
          value={input1}
          onChange={(e) => setInput1(e.target.value)}
          min={0}
          max={255}
        />
        <span>{input1}</span>
        <input
          type="range"
          value={input2}
          onChange={(e) => setInput2(e.target.value)}
          min={0}
          max={255}
        />
        <span>{input2}</span>
        <input
          type="range"
          value={input3}
          onChange={(e) => setInput3(e.target.value)}
          min={0}
          max={255}
        />
        <span>{input3}</span>
        <input
          type="range"
          value={input4}
          onChange={(e) => setInput4(e.target.value)}
          min={0}
          max={1}
          step={0.01}
        />
        <span>{input4}</span>
      </Container>
    </>
  );
}

// container
const Container = styled.div`
  width: 100vw;
  /* height: 100vh; */
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-items: center;
  row-gap: 20px;
`;

// title
const SubTitle = styled.h2`
  background-color: black;
  color: white;
  padding: 12px 8px;
  margin: 20px 0;
`;

// button
const BlueButton = styled.button`
  background-color: blue;
  color: white;
  padding: 10px;
  border-radius: 8px;
  margin: 10px;
`;

// button component reuse
const LargeBlueButton = styled(BlueButton)`
  width: 300px;
  padding: 20px;
`;

const LargeTextBlueButton = styled(LargeBlueButton)`
  font-size: 24px;
  font-weight: 800;
`;

// props
const PropsButton = styled.button`
  width: ${(props) => props.width || "auto"};
  font-size: ${(props) => props.fontSize || "auto"};
  font-weight: ${(props) => props.fontWeight || 400};
  background-color: ${(props) => props.backgroundColor || "white"};
  color: ${(props) => props.textColor || "black"};
  padding: ${(props) => props.padding || 0};
  border-radius: ${(props) => props.radius || 0};
  margin: ${(props) => props.margin || 0};
`;

const BackgroundColorDiv = styled.div`
  grid-column: 1 / -1;
  width: 300px;
  height: 100px;
  background-color: rgba(
    ${(props) => props.input1},
    ${(props) => props.input2},
    ${(props) => props.input3},
    ${(props) => props.input4}
  );
`;

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  input{
    width: 80%;
  }
`;

export default App;
