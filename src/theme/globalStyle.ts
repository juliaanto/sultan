import { createGlobalStyle } from "styled-components";
import theme from "./theme";

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${theme.color.canvas};
    color: ${theme.color.textPrimary};
    font-family: "Inter", sans-serif;
    font-size: 14px;
  }

  a {
    text-decoration: none;
    color: ${theme.color.textPrimary};
  }

  ul {
    list-style: none;
    padding-left: 0;
    margin: 0;
  }
`;

export default GlobalStyle;