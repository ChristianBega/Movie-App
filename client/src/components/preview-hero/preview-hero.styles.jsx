import { styled } from "styled-components";

// export const

export const HeroContainer = styled.div`
  background-image: ${({ movieBackDrop }) => `url(${movieBackDrop})`};
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
`;
