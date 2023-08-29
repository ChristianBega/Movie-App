import styled from "styled-components";
import { DEFAULT_HOVER, FLEX_CENTERED, PADDING_SM } from "../../index.styles";

export const StyleLogo = styled.div`
  background-color: lightblue;
  padding: 0.7rem 1rem;
  ${DEFAULT_HOVER}
`;
export const NavigationBar = styled.nav`
  min-height: 50px;
  width: 100%;
  border: 1px solid red;
  ${FLEX_CENTERED};
  ${PADDING_SM}
`;
