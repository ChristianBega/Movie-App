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
  overflow: hidden;
  @media ${device.desktop} {
    min-height: 50vh;
  }
  button {
    border: 2px solid red;
    margin-inline: 1rem;
    z-index: inherit;
  }
`;

export const ProfileBackgroundBlur = styled.span`
  height: 100%;
  width: 100%;
  position: absolute;
  inset: 0;
  backdrop-filter: blur(150px);
  -webkit-backdrop-filter: blur(150px); /* Add this line */
  z-index: -1;
`;
