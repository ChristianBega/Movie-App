import styled from "styled-components";
import { DefaultSkeltonStyling } from "../index.styles";
import { device } from "../../../device-breakpoints.styles";
import { FLEX_CENTERED, FLEX_CENTERED_BETWEEN } from "../../../index.styles";

// Create the shimmering box component
export const SkeletonFavoriteCard = styled.div`
  ${DefaultSkeltonStyling}
  ${FLEX_CENTERED}
  color : #000;
  font-weight: bold;
  flex-direction: column;
  border-radius: 18px;
  height: 120px;
  width: 180px;
  @media ${device.tablet} {
    height: 120px;
    width: 200px;
    margin: 0.8rem;
  }
  @media ${device.laptop} {
    height: 140px;
    width: 240px;
    margin: 0.8rem;
  }
`;
