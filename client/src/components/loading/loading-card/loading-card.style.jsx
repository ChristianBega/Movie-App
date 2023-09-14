import styled from "styled-components";
import { DefaultSkeltonStyling } from "../index.styles";

// Create the shimmering box component
export const SkeletonCard = styled.div`
  min-width: 174px;
  min-height: 264px;
  border-radius: 18px;
  ${DefaultSkeltonStyling}
`;
