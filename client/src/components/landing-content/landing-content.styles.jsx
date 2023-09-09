import styled from "styled-components";
import { LANDING_HEADER_2, PADDING_SM } from "../../index.styles";

export const StyledLandingContent = styled.div`
  min-height: 450px;
  width: 100%;
  border: 1px solid red;
  ${PADDING_SM}

  h2 {
    ${LANDING_HEADER_2}
    margin-bottom : 1.5rem;
    letter-spacing: 0.1rem;
  }
  p {
    line-height: 22px;
    max-width: 850px;
  }
`;
