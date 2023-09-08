import { styled } from "styled-components";
import { LANDING_HEADER_1, LANDING_HEADER_2, LOGO } from "../../index.styles";
import { device } from "../../device-breakpoints.styles";

export const LandingHeroContainer = styled.div`
  height: 90vh;
  width: 100%;
  display: flex;
  align-items: center;
  background-position: center;
  background-size: cover;
  position: relative;
  padding-left: 2rem;
  @media (${device.laptop}) {
    padding-left: 5rem;
  }
  @media (${device.desktop}) {
    padding-left: 10rem;
  }

  &:before {
    content: "";
    background-image: linear-gradient(to top, #12151e, transparent);
    position: absolute;
    inset: 0;
    z-index: -1000;
  }

  .hero-text-container {
    h1 {
      ${LANDING_HEADER_1}
      margin-bottom : 1.5rem;
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
