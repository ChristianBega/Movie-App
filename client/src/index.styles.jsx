// Variables
// Mixins

import styled, { css } from "styled-components";
import { device } from "./device-breakpoints.styles";

// color palette
// text colors
// hover effects (links, buttons, text)
// padding

export const DEFAULT_HOVER = css`
  cursor: pointer;
`;
export const FLEX_CENTERED_BETWEEN = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const FLEX_CENTERED = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const PADDING_SM = css`
  padding: 1rem;
`;

export const BOX_SHADOW_BASE = css`
  box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
`;

export const BOX_SHADOW_INPUT = css`
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
`;

export const HEADER_2 = css`
  font-size: 18px;
  font-weight: bold;
  @media ${device.laptop} {
    font-size: 20px;
  }
  @media ${device.desktop} {
    font-size: 24px;
  }
`;

export const PREVIEW_HEADER_2 = css`
  font-size: 36px;
  font-weight: bold;
  @media ${device.laptop} {
    font-size: 46px;
  }
  @media ${device.desktop} {
    font-size: 56px;
  }
`;
