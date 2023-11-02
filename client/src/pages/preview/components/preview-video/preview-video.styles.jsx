import styled from "styled-components";
import { device } from "../../../../device-breakpoints.styles";

export const PreviewVideoContainer = styled.div`
  margin-top: 2rem;
  @media ${device.laptop} {
    /* margin-left: 2rem; */
    /* border: 1px solid red; */
    height: 400px;
    width: 600px;
  }
`;
