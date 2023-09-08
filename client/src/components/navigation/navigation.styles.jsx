import styled, { css } from "styled-components";
import { DEFAULT_HOVER, FLEX_CENTERED_BETWEEN, PADDING_SM } from "../../index.styles";
/* Import the custom font, or provide a suitable Netflix-like font */
// @import url("https://fonts.googleapis.com/css?family=Netflix Sans&display=swap");
const MenuItemStyling = css`
  height: 48px;
  width: 48px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  /* border: 1px solid red; */
  background-color: #34343449;
  ${DEFAULT_HOVER}
`;

export const StyleLogo = styled.div`
  padding: 0.7rem 1rem;
  &:hover {
    transform: scale(1.05);
  }
  .logo {
    /* font-family: "Netflix Sans", Arial, sans-serif; Use Netflix-like font */
    font-family: "Montserrat", sans-serif;
    font-weight: 600;
    text-transform: uppercase; /* Uppercase text */
    letter-spacing: -2px; /* Adjust letter spacing */
    color: #e50914; /* Netflix red color */
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5); /* Add a shadow */
    margin: 0; /* Remove default margins */
    letter-spacing: 0.1rem;
    font-size: 18px;
  }
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
