import styled, { css } from "styled-components";
import { DEFAULT_HOVER, FLEX_CENTERED_BETWEEN, LOGO, PADDING_SM } from "../../index.styles";
import { device } from "../../device-breakpoints.styles";

const MenuItemStyling = css`
  height: 48px;
  width: 48px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  background-color: #34343449;
  ${DEFAULT_HOVER}
`;

export const StyleLogo = styled.div`
  padding: 0.7rem 1rem;
  &:hover {
    transform: scale(1.05);
  }
  .logo {
    ${LOGO}
    font-size: 18px;
  }
`;
export const NavigationBar = styled.nav`
  min-height: 50px;
  ${FLEX_CENTERED_BETWEEN};
  ${PADDING_SM}
`;
export const NavigationItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  width: 100%;
  & .navigation-drop-down-button {
    margin-right: auto;
  }
  img {
    width: 50px;
    border-radius: 50%;
  }
`;

export const StyledProfileImage = styled.img`
  width: 100%;
  height: 100%;
  @media ${device.desktop} {
    min-width: 50px;
    min-height: 50px;
  }
`;
