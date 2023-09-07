//  @media ${device.laptop} {
//     position: absolute;
//     inset: 0;
//   }
//   /* @media ${device.desktop} {
//     height: 80vh;
//   } */

import { styled } from "styled-components";
import { device } from "../../device-breakpoints.styles";

export const PreviewContentSection = styled.section`
  @media ${device.laptop} {
    position: absolute;
    bottom: 500px;
  }
`;
