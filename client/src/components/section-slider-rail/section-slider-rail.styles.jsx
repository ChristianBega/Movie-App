import { motion } from "framer-motion";
import styled from "styled-components";
import { device } from "../../device-breakpoints.styles";
export const StyledSliderRailHeader = styled(motion.h2)`
  font-size: 18px;
  font-weight: bold;
  @media ${device.laptop} {
    font-size: 20px;
  }
  @media ${device.desktop} {
    font-size: 24px;
  }
`;

export const StyledSliderRailContainer = styled(motion.div)`
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.45) inset;
  min-height: 155px;
  display: flex;
  gap: 1rem;
  align-items: center;
  width: 100%;
  border-radius: 16px;
  margin: 1rem 0 3rem 0;
  padding: 1rem;
  overflow-x: scroll;
  scrollbar-width: none;
  -ms-overflow-style: none;
  &::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    border-radius: 10px;
    background-color: #f5f5f5;
  }

  &::-webkit-scrollbar {
    width: 12px;
    height: 12px;
    border-radius: 10px;
    background-color: #f5f5f5;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: #555;
  }
  &::-webkit-scrollbar-thumb:hover {
    background-color: #8d8d8d;
  }
  @media ${device.desktop} {
    padding: 1.25rem;
  }
`;
