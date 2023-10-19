// Variables
// Mixins

import styled, { css } from "styled-components";
import { device } from "./device-breakpoints.styles";

// color palette
// text colors
// hover effects (links, buttons, text)
// padding

export const DEFAULT_HOVER = css`
  &:hover {
    cursor: pointer;
    box-shadow: 0px 0px 12px 4px #0f439293;
    transform: scale(1.01);
  }
`;
export const REMOVE_DEFAULT_HOVER = css`
  &:hover {
    cursor: pointer;
    box-shadow: 0px 0px 12px 4px #923f0fc7;
    transform: scale(1.01);
  }
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

export const BOX_SHADOW_INPUT = css`
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
`;

export const LOGO = css`
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: -2px;
  color: #e50914;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  margin: 0;
  letter-spacing: 0.1rem;
`;

export const FORM_HEADER_1 = css`
  font-size: 24px;
  font-weight: bold;
  @media ${device.laptop} {
    font-size: 28px;
  }
  @media ${device.desktop} {
    font-size: 32px;
  }
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

export const LANDING_HEADER_1 = css`
  font-size: 28px;
  @media ${device.laptop} {
    font-size: 38px;
  }
  @media ${device.desktop} {
    font-size: 48px;
  }
`;

export const LANDING_HEADER_2 = css`
  font-weight: bold;
  font-size: 20px !important;
  @media ${device.laptop} {
    font-size: 24px !important;
  }
  @media ${device.desktop} {
    font-size: 28px !important;
  }
`;

export const PREVIEW_HEADER_2 = css`
  font-weight: bold;
  font-size: 32px !important;
  @media ${device.laptop} {
    font-size: 55px !important;
  }
  @media ${device.desktop} {
    font-size: 65px !important;
  }
`;

export const SLIDER_SECTION = css`
  margin: auto;
  max-width: 1600px;
  padding: 2rem;
  @media ${device.desktop} {
    padding: 3rem;
  }
`;
