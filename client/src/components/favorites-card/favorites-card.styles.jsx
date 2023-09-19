import { styled } from "styled-components";
import { device } from "../../device-breakpoints.styles";
export const StyledFavoritesCard = styled.div`
  background-image: ${({ image }) => `url(${image})`};
  background-position: center;
  background-size: cover;
  margin: 0.5rem;

  height: 120px;
  width: 180px;
  position: relative;
  border-radius: 18px;
  &:hover {
    cursor: pointer;
    transform: scale(1.1);
    transition: all 0.2s ease-in-out;
    transition-duration: 0.3s;
  }

  @media ${device.tablet} {
    height: 120px;
    width: 200px;
    margin: 0.8rem;
  }
  @media ${device.laptop} {
    height: 140px;
    width: 240px;
    margin: 0.8rem;
  }
`;

export const StyledTextContainer = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 1rem;
  opacity: 0;
  transition: all 0.2s ease-in-out;
  transition-duration: 0.3s;
  span {
    display: flex;
    align-items: center;
    gap: 0.2;
  }
  &:hover {
    opacity: 1;
    cursor: pointer;
  }

  &:hover:after {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: 18px;
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.9) 20%, rgba(85, 85, 85, 0.4) 36%, rgba(57, 57, 57, 0.3) 59%, rgba(41, 41, 41, 0.3) 78%);
    opacity: 1;
    transition: all 0.2s ease-in-out;
    z-index: -1000;
  }
`;
