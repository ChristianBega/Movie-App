import styled, { css } from "styled-components";
import { DEFAULT_HOVER, FLEX_CENTERED_BETWEEN, PADDING_SM } from "../../index.styles";

const MenuItemStyling = css`
  height: 40px;
  width: 40px;
  border-radius: 50%;
  border: 1px solid red;
`;

export const StyleLogo = styled.div`
  background-color: lightblue;
  padding: 0.7rem 1rem;
  ${DEFAULT_HOVER}
`;
export const NavigationBar = styled.nav`
  min-height: 50px;

  border: 1px solid red;
  ${FLEX_CENTERED_BETWEEN};
  ${PADDING_SM}
`;
export const NavigationItemContainer = styled.div`
  /* border: 1px solid red; */
  display: flex;
  align-items: center;
  gap: 1rem;
  width: 100%;
  & .navigation-drop-down-button {
    margin-right: auto;
  }
  & .navigation-menu-item {
    ${MenuItemStyling};
  }
`;
