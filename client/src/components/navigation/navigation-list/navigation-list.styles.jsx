import styled from "styled-components";
import { device } from "../../../device-breakpoints.styles.jsx";
export const NavigationListContainer = styled.ul`
  margin-right: auto;
  font-size: 1.4rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 500px;
  gap: 1rem;
  margin-top: 2rem;

  & .link-list-item {
    &:hover {
      transform: scale(1.1);
      transition: 0.2s ease-in-out;
      text-shadow: 2px 2px 10px #fff;
    }
  }
  & .nav-list-icon {
    font-size: 1.4rem;
    margin-right: 0.5rem;
  }

  @media ${device.desktop} {
    min-height: 100%;
    gap: 0;
    margin-top: 0;
    flex-direction: row;
    font-size: 1rem;
    margin-left: 2rem;
    display: flex;
    align-items: center;
    align-content: center;
    gap: 2rem;
  }
`;
