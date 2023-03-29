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

  input[type="search"]::-webkit-search-decoration,
  input[type="search"]::-webkit-search-results-button,
  input[type="search"]::-webkit-search-results-decoration {
    display: none;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
  }

  input[type=number] {
      -moz-appearance:textfield;
  }
`;

export default GlobalStyle;