import { motion } from "framer-motion";
import styled from "styled-components";
import TomatoImage from "../../../public/tomato.png";
export const StyledSliderRailCard = styled(motion.div)`
  background-image: ${({ image }) => `url(${image})`};
  min-width: 275px;
  min-height: 165px;
  background-position: center;
  background-size: cover;
  border-radius: 18px;

  &:hover {
    transform: scale(1.02);
    cursor: pointer;
  }
  &:hover::before {
    content: ${({ title, rating }) => `"${title}\\00000a${rating * 10}%"`};
    white-space: pre; /* or pre-wrap */
    background: linear-gradient(0deg, rgba(14, 15, 15, 0.900078781512605) 5%, rgba(157, 157, 157, 0.2) 100%);
    position: absolute;
    border-radius: 18px;
    inset: 0;
    z-index: 1000;
    display: flex;
    align-items: end;
    justify-content: flex-start;
    padding: 1rem;
    transition: all 0.2s ease-in-out;

    transition-duration: 0.3s;
  }
`;
