import styled from "styled-components";

function App() {
  return (
    <>
      <Container>
        <p>Styled-Components</p>
        <BlueButton>BlueButton</BlueButton>
        <LargeBlueButton>LargeBlueButton</LargeBlueButton>
        <LargeTextBlueButton>LargeTextBlueButton</LargeTextBlueButton>
      </Container>
    </>
  );
}

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

// container
const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: grid;
  place-items: center;
`;

export default App;
