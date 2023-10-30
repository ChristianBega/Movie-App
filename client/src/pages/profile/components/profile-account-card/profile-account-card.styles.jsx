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
    background-image: ${({ colors }) => (colors && colors.length >= 2 ? `linear-gradient(160deg, ${colors[0]} 50%, ${colors[1]} 90%)` : "initial")};
    animation: rotate 20s infinite;
    filter: blur(125px) opacity(0.8);
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
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    transition: transform 0.3s;
    &:hover {
      transform: ${({ isActive }) => `${isActive ? "scale(1.3)" : "scale(.8)"}`};
      cursor: pointer;
    }

    img {
      margin: auto;
      margin-top: 5rem auto;
      min-height: 150px;
      min-width: 150px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      z-index: 200;
      box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
    }
    p {
      margin-top: 2rem;
      text-align: center;
    }
  }
`;
