import styled, { css } from "styled-components";
import { DEFAULT_HOVER, FLEX_CENTERED_BETWEEN, PADDING_SM } from "../../index.styles";

const MenuItemStyling = css`
  height: 48px;
  width: 48px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  /* border: 1px solid red; */
  background-color: #34343449;
  &:hover {
    background-color: #007bff51;
  }
`;

export const StyleLogo = styled.div`
  background-color: lightblue;
  padding: 0.7rem 1rem;
  ${DEFAULT_HOVER}
`;
export const NavigationBar = styled.nav`
  min-height: 50px;
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
