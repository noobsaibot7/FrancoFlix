import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
        padding: 0;
        box-sizing: border-box;
        background-color: ${props => (props.theme ? "#000" : "#fff")};
        color: ${props => (props.theme ? "#fff" : "#000")};
        transition: all 1.24s ease-in-out;
       
  }
`;
