import { css, styled } from "styled-components";
import { DEFAULT_HOVER, FLEX_CENTERED } from "../../index.styles";
const DEFAULT_BUTTON_COLORS = css`
  background-color: #141414;
  border: 2px solid #007bff;
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
  /* border: 2px solid #007bff; */
  padding: 0.7rem 1rem;
  gap: 0.5rem;
  margin-left: 2rem;
  ${FLEX_CENTERED}
  ${DEFAULT_BUTTON_COLORS}
  ${DEFAULT_HOVER};
`;
export const CloseButton = styled.button`
  height: 35px;
  width: 35px;
  border-radius: 50%;
  ${DEFAULT_BUTTON_COLORS}
  ${FLEX_CENTERED}
  ${DEFAULT_HOVER};
`;
export const FavoritesButton = styled.button`
  gap: 1rem;
  background-color: #141414;
  border: 2px solid #b79722 !important;
  ${DEFAULT_BUTTON_STYLES}
  ${FLEX_CENTERED}
`;
export const FavoritesButtonSm = styled.button`
  gap: 1rem;
  background-color: #141414;
  border: 2px solid #b79722 !important;
  ${DEFAULT_BUTTON_STYLES}
  ${FLEX_CENTERED}
`;
