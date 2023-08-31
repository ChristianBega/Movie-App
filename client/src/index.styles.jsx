// Variables
// Mixins

import styled, { css } from "styled-components";

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
