import { css, styled } from "styled-components";
import { BUTTON_TEXT, DEFAULT_HOVER, FLEX_CENTERED, REMOVE_DEFAULT_HOVER } from "../../index.styles";
import { device } from "../../device-breakpoints.styles";
const DEFAULT_BUTTON_COLORS = css`
  background-color: #141414;
  border: 2px solid #0f4392 !important;
`;

const REMOVE_BUTTON_COLORS = css`
  background-color: #141414;
  border: 2px solid #923f0fc7 !important;
`;
const DEFAULT_BUTTON_STYLES = css`
  padding: 10px 20px;
  border-radius: 50px;
  font-size: 16px;
  ${DEFAULT_HOVER}
  ${DEFAULT_BUTTON_COLORS}
  ${BUTTON_TEXT}
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
  min-width: 95px;
  max-width: 103px;
  ${DEFAULT_BUTTON_STYLES}
`;

export const DropDownMenuButton = styled.button`
  padding: 0.7rem 1rem;
  gap: 0.5rem;
  margin-left: 0.5rem;
  @media ${device.laptop} {
    margin-left: 2rem;
  }
  border: 2px solid #4b4b4b;
  cursor: pointer;
  ${FLEX_CENTERED}
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
export const RemoveFavoritesButton = styled.button`
  gap: 1rem;
  padding: 10px 20px;
  border-radius: 50px;
  font-size: 16px;
  ${FLEX_CENTERED}
  ${REMOVE_BUTTON_COLORS}
  ${REMOVE_DEFAULT_HOVER}
  ${BUTTON_TEXT}
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

export const PlayButton = styled.button`
  ${DEFAULT_BUTTON_STYLES}
  border-color: #a46609 !important;
  &:hover {
    cursor: pointer;
    box-shadow: 0px 0px 12px 4px #a4660992;
    transform: scale(1.01);
  }
  display: flex;
  align-items: center;
  justify-content: center;
  & .play-icon {
    color: #fff !important;
    margin-right: 0.5rem;
  }
`;

export const ViewMoreButton = styled.button`
  ${FLEX_CENTERED}
  border: 2px solid #92a409;
  color: #92a409;
  border-radius: 18px;
  background-color: #9c9c9c1e;
  min-width: 110px;
  min-height: 154px;
  @media ${device.laptop} {
    min-width: 174px;
    min-height: 264px;
  }
  &:hover {
    transform: scale(1.1) !important;
    cursor: pointer;
  }
`;
