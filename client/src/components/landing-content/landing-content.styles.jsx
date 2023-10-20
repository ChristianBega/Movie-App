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
  overflow: hidden;
  ${PADDING_SM}

  @media ${device.desktop} {
    overflow: visible;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 4rem;
  }

  & .text-container {
    position: relative;

    &::before {
      content: "";
      position: absolute;
      background: transparent;
      background-size: cover;
      background-position: center;
      background-image: ${({ backgroundImage }) => `url(${backgroundImage.backgroundUrl})`};
      height: ${({ backgroundImage }) => `${backgroundImage.styling.height}px`};
      width: ${({ backgroundImage }) => `${backgroundImage.styling.width}px`};
      left: ${({ backgroundImage }) => `${backgroundImage.styling.left}px`};
      right: ${({ backgroundImage }) => `${backgroundImage.styling.right}px`};
      top: ${({ backgroundImage }) => `${backgroundImage.styling.top}px`};
      bottom: ${({ backgroundImage }) => `${backgroundImage.styling.bottom}px`};
      transform: ${({ backgroundImage }) => `rotate(${backgroundImage.styling.rotate})`};
      display: flex;
      flex-direction: column;
      justify-content: center;
      opacity: 0.2;
      z-index: -1;
      overflow: visible;
      @media ${device.desktop} {
        height: ${({ backgroundImage }) => `${backgroundImage.styling.height}`};
        width: ${({ backgroundImage }) => `${backgroundImage.styling.width}`};
      }
    }

    h2 {
      ${LANDING_HEADER_2}
      margin-bottom: 1.5rem;
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
