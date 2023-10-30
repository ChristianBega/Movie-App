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
  min-height: 60vh;
  overflow: visible;
  @media ${device.desktop} {
    min-height: 50vh;
  }
  button {
    /* inset: 50%; */
    /* transform: translate(-50%, -50%); */
    /* margin-inline: 1rem; */
    z-index: inherit;
    height: 45px;
    width: 35px;
    z-index: 1000;
    background-color: #00000075;
    border: 2px solid #4b4b4b;
    backdrop-filter: blur(5px);
    &:hover {
      cursor: pointer;
    }
  }
`;

export const ProfileBackgroundBlur = styled.span`
  height: 100%;
  width: 100%;
  position: absolute;
  inset: 0;
  backdrop-filter: blur(69px);
  -webkit-backdrop-filter: blur(150px);
  z-index: -1000;
`;
