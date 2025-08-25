import styled from "styled-components";

export const Counter = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
  color: #ffffff;
  font-size: 20px;
  gap: 20px;
  p {
    grid-column: 1/-1;
    font-size: 24px;
  }
  button {
    width: 80px;
    font-size: inherit;
    padding: 8px;
  }
`;
