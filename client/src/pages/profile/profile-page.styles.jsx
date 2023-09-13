import styled from "styled-components";
import { HEADER_2 } from "../../index.styles";
import { device } from "../../device-breakpoints.styles";

export const StyledProfilePageHeader = styled.h1`
  ${HEADER_2}
  text-align : center;
  margin: 4rem 0 2rem 0;
`;

export const StyledProfileSection = styled.div`
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
  overflow: hidden;
  @media ${device.desktop} {
    min-height: 50vh;
  }
`;

export const StyledProfileContainer = styled.div`
  width: 200px;
  position: relative;

  &:before {
    content: "";
    height: 50px;
    width: 50px;
    z-index: -1000;
    display: ${({ isActive }) => `${isActive ? "block" : "none"}`};
    height: 600px;
    width: 600px;
    /* aspect-ratio: 1; */
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    border-radius: 50%;
    background-image: ${({ colorOne, colorTwo }) => `linear-gradient(160deg, ${colorOne} 50%, ${colorTwo} 90%)`};
    animation: rotate 20s infinite;
  }
  .profile-text-wrapper {
    display: flex;
    flex-direction: column;
    transition: transform 0.3s;
    &:hover {
      transform: ${({ isActive }) => `${isActive ? "scale(1.3)" : "scale(.8)"}`};
    }

    img {
      margin: auto;
      margin-top: 5rem auto;
      min-height: 150px;
      min-width: 150px;
      border-radius: 50%;
      background-color: red;
      z-index: 200;
    }
    p {
      margin-top: 2rem;
      text-align: center;
    }
  }
`;

export const ProfileOrb = styled.span`
  z-index: -1000;
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
`;
export const ProfileBackgroundBlur = styled.span`
  height: 100%;
  width: 100%;
  position: absolute;
  inset: 0;
  backdrop-filter: blur(150px);
  z-index: -1;
`;
