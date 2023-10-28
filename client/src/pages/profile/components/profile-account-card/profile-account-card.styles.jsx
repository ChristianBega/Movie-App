import styled from "styled-components";
import { device } from "../../../../device-breakpoints.styles";
export const StyledProfileContainer = styled.div`
  width: 200px;
  position: relative;

  &:before {
    content: "";
    height: 50px;
    width: 50px;
    z-index: -1000;
    display: ${({ isActive }) => `${isActive ? "block" : "none"}`};
    height: 400px;
    width: 400px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    border-radius: 50%;
    background-image: ${({ colorOne, colorTwo }) => `linear-gradient(160deg, ${colorOne} 50%, ${colorTwo} 90%)`};
    animation: rotate 20s infinite;
    @media ${device.laptop} {
      height: 400px;
      width: 400px;
    }
    @media ${device.desktop} {
      height: 600px;
      width: 600px;
    }
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
      border: 1px solid red;
      display: flex;
      align-items: center;
      z-index: 200;
    }
    p {
      margin-top: 2rem;
      text-align: center;
    }
  }
`;
