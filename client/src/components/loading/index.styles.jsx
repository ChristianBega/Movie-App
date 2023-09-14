import { css, keyframes } from "styled-components";
// Define the shimmer animation
const shimmer = keyframes`
  100% {
    transform: translateX(100%);
  }
`;
export const DefaultSkeltonStyling = css`
  display: inline-block;
  position: relative;
  overflow: hidden;
  background-color: #c2c2c2;
  &::after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    transform: translateX(-100%);
    background-image: linear-gradient(
      90deg,
      rgba(255, 255, 255, 0) 0,
      rgba(204, 204, 204, 0.367) 20%,
      rgba(255, 255, 255, 0.5) 60%,
      rgba(255, 255, 255, 0)
    );
    animation: ${shimmer} 3s infinite;
  }
`;

// Create the shimmering box component
export const AlternativeSkeltonStyling = css`
  display: inline-block;
  position: relative;
  overflow: hidden;
  background-color: #c2c2c2;
  &::after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    transform: translateX(-100%);
    background-image: linear-gradient(
      90deg,
      rgba(255, 255, 255, 0) 0,
      rgba(137, 137, 137, 0.367) 20%,
      rgba(255, 255, 255, 0.712) 60%,
      rgba(255, 255, 255, 0)
    );
    animation: ${shimmer} 2s infinite;
  }
`;
