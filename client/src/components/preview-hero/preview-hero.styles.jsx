import { styled } from "styled-components";
import { device } from "../../device-breakpoints.styles";

// export const

export const HeroContainer = styled.div`
  background-image: ${({ moviebackdrop }) => `url(${moviebackdrop})`};
  height: 40vh;
  width: 100%;
  background-position: center;
  background-size: cover;
  position: relative;
  &:before {
    content: "";
    background-image: linear-gradient(to top, #12151e, transparent);
    position: absolute;
    inset: 0;
  }

  @media ${device.laptop} {
    height: 60vh;
  }
  @media ${device.desktop} {
    height: 80vh;
  }
`;
