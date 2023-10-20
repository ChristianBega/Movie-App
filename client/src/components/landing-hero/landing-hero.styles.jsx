import { styled } from "styled-components";
import { LANDING_HEADER_1, LOGO, PADDING_SM } from "../../index.styles";
import { device } from "../../device-breakpoints.styles";
import BackgroundImage from "../../assets/landing-page-hero-image.jpg";
export const LandingHeroContainer = styled.div`
  height: 90vh;
  width: 100%;
  display: flex;
  align-items: center;
  background-position: center;
  background-size: cover;
  position: relative;
  ${PADDING_SM}
  @media (${device.laptop}) {
    padding-left: 5rem;
  }
  @media (${device.desktop}) {
    padding-left: 10rem;
  }

  &:before {
    content: "";
    /* background-image: linear-gradient(to top, #12151e, transparent); */
    background-image: linear-gradient(to top, #12151e, #12151eed, #23293ada, #3e455890);
    position: absolute;
    inset: 0;
    z-index: -1000;
    height: 101%;
  }
  &:after {
    content: url(${BackgroundImage});
    position: absolute;
    inset: 0;
    z-index: -2000;
    overflow: hidden;
  }
  .hero-text-container {
    h1 {
      ${LANDING_HEADER_1}
      margin-bottom : 1.5rem;
      color: #babbbd;
    }
    p {
      line-height: 22px;
      max-width: 700px;
      margin-bottom: 1rem;
    }
    small {
      margin-bottom: 2rem;
      font-size: 12px;
      ${LOGO}
    }
  }
`;
