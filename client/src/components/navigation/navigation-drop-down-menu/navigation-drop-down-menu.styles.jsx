import { createGlobalStyle, styled } from "styled-components";
export const GlobalStyle = createGlobalStyle`
  body, html {
    overflow: hidden;
  }
`;
export const DropDownMenu = styled.div`
  position: fixed;
  overflow: hidden;
  inset: 0;
  max-height: 100vh;
  width: 100vw;
  background-color: #22202069;

  z-index: 1001;
  padding: 2rem;
  &:before {
    content: "";
    backdrop-filter: blur(15px);
    background-color: #1d1c1c69;
    position: fixed;
    overflow: hidden;
    inset: 0;
    z-index: -1000;
  }
`;
