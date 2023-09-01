import { motion } from "framer-motion";
import styled, { css } from "styled-components";
import TomatoImage from "../../../src/assets/tomato.png";

const CardPositionStyles = css`
  position: absolute;
  inset: 0;
  border-radius: 18px;
  overflow: hidden;
`;
export const StyledSliderRailCard = styled(motion.div)`
  background-image: ${({ image }) => `url(${image})`};
  min-width: 174px;
  min-height: 264px;
  background-position: center;
  background-size: cover;
  border-radius: 18px;
  position: relative;

  &:hover {
    transform: scale(1.02);
    cursor: pointer;
  }
`;

export const StyledCardOverLay = styled(motion.div)`
  ${CardPositionStyles}
  &:hover {
    border-radius: 18px;
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.9) 20%, rgba(85, 85, 85, 0.4) 36%, rgba(57, 57, 57, 0.3) 59%, rgba(41, 41, 41, 0.3) 78%);
    opacity: 1;
    z-index: 1;
    transition: all 0.2s ease-in-out;
  }
  & .text-container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-end;
    height: 100%;
    width: 100%;
    padding: 1rem;
    opacity: 0;
    transition: all 0.2s ease-in-out;
    transition-duration: 0.3s;
    span {
      display: flex;
      align-items: center;
      gap: 0.2;
    }
    &:hover {
      opacity: 1;
    }
  }
`;
//  &:hover::before {
//     content: ${({ title, rating }) => `"${title}\\00000a${rating * 10}%"`};
//     white-space: pre; /* or pre-wrap */
//     background: linear-gradient(0deg, rgba(14, 15, 15, 0.900078781512605) 5%, rgba(157, 157, 157, 0.2) 100%);
//     position: absolute;
//     border-radius: 18px;
//     inset: 0;
//     z-index: 1000;
//     display: flex;
//     align-items: end;
//     justify-content: flex-start;
//     padding: 1rem;
//     transition: all 0.2s ease-in-out;
//     transition-duration: 0.3s;
//   }
