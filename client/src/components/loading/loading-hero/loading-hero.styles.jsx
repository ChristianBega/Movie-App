import styled from "styled-components";
import { AlternativeSkeltonStyling, DefaultSkeltonStyling } from "../index.styles";
import { device } from "../../../device-breakpoints.styles";
import { FLEX_CENTERED_BETWEEN, PADDING_SM } from "../../../index.styles";

export const SkeletonHero = styled.div`
  height: 60vh;
  max-width: 1246px;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  ${PADDING_SM}
  padding: 2rem 2rem 10rem 2rem;
  @media ${device.laptop} {
    padding: 3rem 3rem 10rem 3rem;
  }

  & .hero-text-container {
    min-width: 100%;

    @media ${device.laptop} {
    }
    & .hero-title {
      ${DefaultSkeltonStyling}
      display: flex;
      flex-direction: row;
      min-width: 50%;
      max-width: 650px;
      height: 120px;
    }
    & .hero-details {
      ${FLEX_CENTERED_BETWEEN}
      gap : 1rem;
      max-width: 30%;
      margin-block: 1rem;
      max-width: 225px;
      min-height: 32.5px;

      & .hero-icon {
        ${AlternativeSkeltonStyling}
        width: 25px;
        height: 25px;
      }
      & .hero-rating {
        ${AlternativeSkeltonStyling}
        width : 25px;
        height: 25px;
      }
      & .hero-genres {
        ${AlternativeSkeltonStyling}
        width : 155px;
        height: 25px;
      }
    }
  }

  & .hero-button-container {
    display: flex;
    gap: 1rem;
    .hero-button {
      /* Add styles for hero-button here if needed */
      ${DefaultSkeltonStyling}
      min-width : 100px;
      padding: 10px 20px;
      border-radius: 50px;
    }
  }

  @media ${device.laptop} {
    height: 60vh;
  }
  @media ${device.desktop} {
    height: 80vh;
  }
`;
