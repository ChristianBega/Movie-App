import styled from "styled-components";
import { HEADER_2 } from "../../index.styles";

export const StyledProfilePageHeader = styled.h1`
  ${HEADER_2}
  text-align : center;
  margin: 4rem 0 2rem 0;
`;

export const StyledProfileSection = styled.div`
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 50vh;
  z-index: 1000;
`;
export const StyledProfileContainer = styled.div`
  width: 200px;
  display: flex;
  flex-direction: column;
  position: relative;
  img {
    &:hover {
      transform: scale(1.3);
    }
    margin: auto;
    margin-top: 5rem auto;
    min-height: 150px;
    min-width: 150px;
    border-radius: 50%;
    background-color: red;
  }
  p {
    margin-top: 2rem;
    text-align: center;
  }
`;
export const ProfileOrb = styled.span`
  display: ${({ isActive }) => `${isActive ? "block" : "none"}`};
  background-color: #fff;
  height: 600px;
  width: 600px;
  aspect-ratio: 1;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  background: ${({ colorOne, colorTwo }) => `linear-gradient(160deg, ${colorOne} 50%, ${colorTwo} 90%)`};
  animation: rotate 20s infinite;
  z-index: -1000;
`;
export const ProfileBackgroundBlur = styled.span`
  height: 100%;
  width: 100%;
  position: absolute;
  z-index: -100;
  inset: 0;
  backdrop-filter: blur(150px);
`;
