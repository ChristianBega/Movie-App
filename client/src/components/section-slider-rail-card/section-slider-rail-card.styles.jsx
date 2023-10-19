import { motion } from "framer-motion";
import styled, { css } from "styled-components";
import { device } from "../../device-breakpoints.styles";

const CardPositionStyles = css`
  position: absolute;
  inset: 0;
  border-radius: 18px;
  overflow: hidden;
`;
export const StyledSliderRailCard = styled(motion.div)`
  background-image: ${({ image }) => `url(${image})`};
  background-position: center;
  background-size: cover;
  border-radius: 18px;
  position: relative;
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

export const StyledCardOverLay = styled(motion.div)`
  ${CardPositionStyles}
  &:hover {
    border-radius: 18px;

    background: rgb(0, 0, 4);
    background: linear-gradient(
      0deg,
      rgba(0, 0, 4, 0.927608543417367) 0%,
      rgba(17, 17, 18, 0.928) 27%,
      rgba(0, 1, 11, 0.5466561624649859) 62%,
      rgba(0, 0, 0, 0.21612394957983194) 99%
    );
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
    h3 {
      font-size: 18px;
      font-weight: bold;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      max-width: 100%;
    }
    span {
      display: flex;
      align-items: center;
      gap: 0.2;
    }
    ul {
      margin-top: 0.5rem;
      width: 100%;
      min-height: 12%;
      max-height: 18%;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      li {
        font-size: 10px;
        margin-inline: 0.25rem;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        max-width: 40%;
      }
    }
    &:hover {
      opacity: 1;
    }
  }
`;
