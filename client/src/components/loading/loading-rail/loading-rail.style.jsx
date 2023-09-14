import styled from "styled-components";
import { DefaultSkeltonStyling } from "../index.styles";

// Create the shimmering box component
export const SkeletonRail = styled.div`
  width: 100%;
  min-height: 155px;
  border-radius: 18px;

  ${DefaultSkeltonStyling}
`;
