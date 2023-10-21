import styled from "styled-components";
import { device } from "../../device-breakpoints.styles";

export const StyledLandingPageWrapper = styled.div`
  position: relative;
  &:before {
    content: "";
    background-image: linear-gradient(to bottom, #12151ef5 1%, #12151e91 3%, #12151e7c 40%, transparent 56%);
    position: absolute;
    inset: 0;
    height: 100%;
    @media ${device.tablet} {
      background-image: linear-gradient(to bottom, #12151ef5 2%, #12151e91 10%, #12151e7c 40%, transparent 48%);
    }
  }
`;
export const LandingContentSection = styled.section`
  max-width: 1600px;
  margin: auto;
  overflow-x: hidden;
  position: relative;
  @media ${device.desktop} {
    overflow-x: visible;
  }
`;
