import styled from "styled-components";
import { device } from "../../device-breakpoints.styles.jsx";
export const NavigationListContainer = styled.ul`
  border: 1px solid blue;
  margin-right: auto;

  @media ${device.desktop} {
    display: flex;
    align-items: center;
    align-content: center;
    gap: 2rem;
  }
`;
