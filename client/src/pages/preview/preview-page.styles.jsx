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
  display: flex;
  justify-content: center;
  @media ${device.laptop} {
    position: absolute;
    bottom: 800px;
  }
`;
