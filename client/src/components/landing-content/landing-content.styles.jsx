import styled from "styled-components";
import { LANDING_HEADER_2, PADDING_SM } from "../../index.styles";
import { device } from "../../device-breakpoints.styles";

export const StyledLandingContent = styled.div`
  min-height: 450px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-block: 3rem;
  position: relative;
  overflow: visible;
  ${PADDING_SM}

  @media ${device.desktop} {
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 4rem;

    &::before {
      content: "";
      height: 700px !important;
      width: 100%;
      left: -400px !important;
      top: -100px !important;
      transform: scale(0.5) rotate(5deg);
      position: absolute;
      background: transparent;
      border: transparent;
      opacity: 0.1;
      background-image: ${({ backgroundImage }) => `url(${backgroundImage})`};
      background-size: cover;
      background-position: center;
      z-index: -1;
      @media ${device.desktop} {
        height: 800px;
        width: 100%;
        left: -500px; /* Adjust the value to control horizontal position */
        top: -100px; /* Adjust the value to control vertical position */
      }
    }
  }
  & .text-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    h2 {
      ${LANDING_HEADER_2}
      margin-bottom : 1.5rem;
      letter-spacing: 0.2rem;
    }
    p {
      line-height: 22px;
      max-width: 850px;
    }
  }
  & .image-container {
    margin-top: 1rem;
    max-width: 550px;
    max-height: 455px;
    display: flex;
    flex-wrap: wrap;
    img {
      opacity: 0.78;
      border-radius: 12px;
      max-width: 100%;
      transition: opacity 0.3s;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.919);
      @media ${device.desktop} {
        max-height: 455px;
      }
    }
    img:hover {
      opacity: 1;
    }
  }
`;
