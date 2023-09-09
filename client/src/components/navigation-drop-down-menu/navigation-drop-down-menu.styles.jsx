import { styled } from "styled-components";

export const DropDownMenu = styled.div`
  position: fixed;
  overflow: hidden;
  inset: 0;
  max-height: 100vh;
  width: 100vw;
  background-color: #222020b5;
  z-index: 1000;
  padding: 2rem;
  &:before {
    content: "";
    backdrop-filter: blur(5px);
    background-color: #2220206c;
    position: fixed;
    overflow: hidden;
    inset: 0;
    z-index: -1000;
  }
`;
