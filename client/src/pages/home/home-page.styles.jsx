import { styled } from "styled-components";
import { device } from "../../device-breakpoints.styles";

export const SliderRailsSection = styled.section`
  margin: auto;
  max-width: 1600px;
  padding: 2rem;
  @media ${device.desktop} {
    padding: 3rem;
  }
`;
