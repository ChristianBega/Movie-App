import { motion } from "framer-motion";
import styled from "styled-components";

export const StyledSliderRailContainer = styled(motion.div)`
  min-height: 155px;
  display: flex;
  gap: 1rem;
  align-items: center;
  width: 100%;
  border-radius: 16px;
  margin-block: 3rem;
  padding: 1rem;
  overflow-x: scroll;
  scrollbar-width: none;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #888;
    border-radius: 4px;
  }
`;
