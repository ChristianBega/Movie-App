import styled from "styled-components";
import { DefaultSkeltonStyling } from "../index.styles";
import { device } from "../../../device-breakpoints.styles";
import { PADDING_SM } from "../../../index.styles";

export const SkeletonRail = styled.div`
  width: 100%;
  border-radius: 18px;
  ${PADDING_SM}
  @media ${device.desktop} {
    padding: 1.25rem;
  }
  & .rail-header {
    ${DefaultSkeltonStyling};
    height: 22px;
    width: 100px;
    @media ${device.laptop} {
      height: 24px;
    }
    @media ${device.desktop} {
      height: 28px;
    }
  }

  & .rail-container {
    ${DefaultSkeltonStyling};
    margin: 1rem auto 3rem auto;
    border-radius: 16px;
    width: 100%;
    height: 296px;
    max-width: 1400px;
    @media ${device.laptop} {
      height: 304px;
    }
  }
`;
