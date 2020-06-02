import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Roboto Mono';
  }

  body, #root {
    min-height: 100vh;
    min-width: 100vw;
  }
`;

export default GlobalStyle;
