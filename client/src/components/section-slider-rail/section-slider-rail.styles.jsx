import { motion } from "framer-motion";
import styled, { css } from "styled-components";
import { device } from "../../device-breakpoints.styles";
import { HEADER_2, PADDING_SM } from "../../index.styles";

export const StyledSliderWrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;

const SliderNavigationButtonCss = css`
  height: 75px;
  width: 30px;
  position: absolute;
  z-index: 1000;
  background-color: #00000075;
  border: 2px solid #4b4b4b;
  backdrop-filter: blur(5px);
  &:hover {
    cursor: pointer;
  }
`;

export const LeftArrowButton = styled.button`
  ${SliderNavigationButtonCss}
  left : 0;
  display: ${({ ishovered }) => `${ishovered === "true" ? "block" : "none"}`};
`;
export const RightArrowButton = styled.button`
  ${SliderNavigationButtonCss}
  right : 0;
  display: ${({ ishovered }) => `${ishovered === "true" ? "block" : "none"}`};
`;

export const StyledSliderRailHeader = styled(motion.h2)`
  ${HEADER_2}
  padding-left : 1rem;
`;
export const StyledSliderRailContainer = styled(motion.div)`
  ${PADDING_SM}
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.45) inset;
  min-height: 155px;
  display: flex;
  width: 100%;
  overflow-x: scroll;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
  gap: 1rem;
  align-items: center;
  border-radius: 16px;
  margin: 1rem auto 3rem auto;
  white-space: nowrap;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }

  @media ${device.desktop} {
    padding: 1.25rem;
  }
`;
