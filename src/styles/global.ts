import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:focus {
  outline:0;
  box-shadow: 0 0 0 2px ${(props) => props.theme["yellow-light"]}
}
body {
  background: ${(props) => props.theme["base-background"]};
  color: ${(props) => props.theme["base-text"]};
  -webkit-font-smoothing: antialiased;
}
body, input, textarea, button {
  font-family: 'Roboto', sans-serif;
  font-weight:400;
  font-size: 1rem;
}
`;
