import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }


  html, body {
    height: 100vh;
  }


  a {
    color: inherit;
    text-decoration: none;
  }
`;
