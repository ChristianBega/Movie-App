import { styled } from "styled-components";
import { device } from "../../device-breakpoints.styles";
export const StyledFavoritesCard = styled.div`
  background-image: ${({ image }) => `url(${image})`};
  background-position: center;
  background-size: cover;
  width: 100px;
  height: 144px;
  position: relative;
  border-radius: 18px;
  &::before {
    content: "";
    position: absolute;
    inset: 0;

    background: radial-gradient(ellipse at center, rgba(22, 21, 21, 0) 60%, rgba(0, 0, 0, 0.2) 70%, rgba(0, 0, 0, 0.4) 80%, rgba(0, 0, 0, 0.8) 100%);

    z-index: 2000;
    border-radius: 18px;
  }
  &:hover::before {
    content: "";
    position: absolute;
    inset: 0;
    background: rgba(139, 134, 134, 0.1);
    box-shadow: rgba(164, 164, 164, 0.2) 0px 10px 30px -6px;
    z-index: 2000;
    border-radius: 18px;
  }
  &:hover {
    cursor: pointer;
    transform: scale(1.1);
    transition: all 0.2s ease-in-out;
    transition-duration: 0.3s;
  }
  @media ${device.tablet} {
    width: 124px;
    height: 164px;
  }
  @media ${device.laptop} {
    min-width: 154px;
    min-height: 194px;
  }
`;

export const StyledTextContainer = styled.div`
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.9) 20%, rgba(85, 85, 85, 0.4) 36%, rgba(57, 57, 57, 0.3) 59%, rgba(41, 41, 41, 0.3) 78%);
  border-radius: 18px;
  position: relative;
  height: 100%;
  width: 100%;
  z-index: 4000;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 1rem;
  opacity: 0;
  transition: all 0.2s ease-in-out;
  transition-duration: 0.3s;
  font-size: 80%;
  @media ${device.tablet} {
    font-size: 100%;
  }

  span {
    display: flex;
    align-items: center;
    p {
      line-height: 24px;
      padding: 0;
    }
  }
  &:hover {
    opacity: 1;
    cursor: pointer;
  }

  /* &:hover:after {
    content: "";
    position: absolute;
    inset: 0;
    opacity: 1;
    transition: all 0.2s ease-in-out;
    z-index: 2002;
  } */
`;
