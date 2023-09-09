import { styled } from "styled-components";
import { device } from "../../device-breakpoints.styles";
import { PADDING_SM, PREVIEW_HEADER_2 } from "../../index.styles";

// export const

export const HeroImageSliderContainer = styled.div`
  background-image: ${({ moviebackdrop }) => `url(${moviebackdrop})`};
  height: 60vh;
  min-width: 100%;
  justify-content: center;
  background-position: center;
  background-size: cover;
  position: relative;
  z-index: 800;
  display: flex;
  align-items: flex-end;
  ${PADDING_SM}
  &:before {
    content: "";
    z-index: 0;
    background-image: linear-gradient(0deg, rgba(18, 21, 30, 1) 10%, rgba(18, 21, 30, 0.95) 25%, rgba(157, 157, 157, 0.3) 91%);
    position: absolute;
    inset: 0;
  }

  & .hero-section-container {
    z-index: 800;
    display: flex;
    flex-wrap: wrap;
    gap: 8rem;

    & .text-container {
      ${PADDING_SM}
    }
    & .hero-title {
      ${PREVIEW_HEADER_2}
      min-width : 50%;
      max-width: 650px;
      font-family: "Limelight", cursive;
      font-size: 32px;
    }
    & .movie-details {
      display: flex;
      align-items: center;
      gap: 0.2;
      margin: 0.3rem 0 1rem 0;
      img {
        max-width: 25px;
        margin-right: 0.3rem;
      }
      small {
        line-height: 24px;
        display: inline;
      }
    }

    & .movie-cast {
      margin-top: 1rem;
    }
    & .button-container {
      display: flex;
      gap: 1rem;
    }
  }

  @media ${device.laptop} {
    height: 60vh;
    padding: 2rem;
  }
  @media ${device.desktop} {
    height: 80vh;
  }
  /* Create media query to increase size at md and lg screens. */
`;

export const SliderBarsContainer = styled.div`
  justify-content: center;
  align-items: flex-end;
  display: flex;
  width: 100%;
  height: 50px;

  @media ${device.mobile} {
    width: 80%;
    margin: auto;
    gap: 0.6rem;
  }
  @media ${device.laptop} {
    width: 100%;
    gap: 1.5rem;
  }
  @media ${device.laptop} {
    gap: 2rem;
  }
`;
export const SliderBarPagination = styled.div`
  margin: 0 3px;
  cursor: pointer;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  /* padding-inline: 1rem; */
  span {
    height: 3px;
    width: 40px;
    background-color: ${({ activeState }) => `${activeState ? "#f3eaea" : "#b1ababd3"}`};
    margin-bottom: 0.5rem;
  }
  small {
    color: ${({ activeState }) => `${activeState ? "#f3eaea" : "#b1ababd3"}`};
    font-weight: bold;
  }
`;
