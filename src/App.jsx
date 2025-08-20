import styled from "styled-components";

function App() {
  return (
    <>
      <Container>
        <p>Styled-Components</p>
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
    </>
  );
}

// container
const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: grid;
  place-items: center;
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

export default App;
