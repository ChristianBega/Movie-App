import { css, styled } from "styled-components";
import { DEFAULT_HOVER, FLEX_CENTERED } from "../../index.styles";
import { device } from "../../device-breakpoints.styles";
const DEFAULT_BUTTON_COLORS = css`
  background-color: #141414;
  border: 2px solid #b79722 !important;
`;
const DEFAULT_BUTTON_STYLES = css`
  padding: 10px 20px;
  border-radius: 50px;
  font-size: 16px;
  ${DEFAULT_HOVER}
  ${DEFAULT_BUTTON_COLORS}
`;

export const BaseButton = styled.button`
  ${DEFAULT_BUTTON_STYLES}
`;

export const InvertedButton = styled.button`
  border: 2px solid red;
  color: #000;
  padding: 0.7rem 1rem;
  ${DEFAULT_HOVER}
`;

export const FormButton = styled.button`
  ${DEFAULT_BUTTON_STYLES}
`;

export const DropDownMenuButton = styled.button`
  padding: 0.7rem 1rem;
  gap: 0.5rem;
  margin-left: 2rem;
  ${DEFAULT_HOVER};

  ${FLEX_CENTERED}
  ${DEFAULT_BUTTON_COLORS}
`;
export const CloseButton = styled.button`
  height: 35px;
  width: 35px;
  border-radius: 50%;
  ${DEFAULT_HOVER};

  ${DEFAULT_BUTTON_COLORS}
  ${FLEX_CENTERED}
`;
export const FavoritesButton = styled.button`
  gap: 1rem;
  ${DEFAULT_BUTTON_STYLES}
  ${FLEX_CENTERED}
`;
export const FavoritesButtonSm = styled.button`
  gap: 1rem;
  ${FLEX_CENTERED}
  ${DEFAULT_BUTTON_STYLES}
  ${DEFAULT_HOVER}
`;
export const BackButton = styled.button`
  position: absolute;
  top: 1rem;
  left: 1rem;
  border-radius: 50%;
  width: 45px;
  height: 45px;
  display: grid;
  place-items: center;
  z-index: 100;
  ${DEFAULT_HOVER}
  ${DEFAULT_BUTTON_COLORS}
  @media ${device.laptop} {
    top: 2rem;
    left: 2rem;
  }
  @media ${device.desktop} {
    left: 4rem;
  }
`;
