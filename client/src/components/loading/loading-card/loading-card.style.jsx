import styled from "styled-components";
import { DefaultSkeltonStyling } from "../index.styles";
import { device } from "../../../device-breakpoints.styles";

// Create the shimmering box component
export const SkeletonCard = styled.div`
  min-width: 110px;
  min-height: 154px;
  @media ${device.laptop} {
    min-width: 174px;
    min-height: 264px;
  }
  border-radius: 18px;
  ${DefaultSkeltonStyling}
`;
