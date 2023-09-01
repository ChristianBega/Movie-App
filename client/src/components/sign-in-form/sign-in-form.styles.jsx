import { styled } from "styled-components";
import { BOX_SHADOW_BASE, PADDING_SM } from "../../index.styles";
import { Link } from "react-router-dom";

export const StyledForm = styled.form`
  ${PADDING_SM}
  ${BOX_SHADOW_BASE}
  /* border: 1px solid red; */
  max-width: 650px;
  margin: 1rem auto;

  & .form-header-container {
    /* background-color: blue; */
    height: 75px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    h1 {
      font-size: 35px;
    }
    p {
    }
  }
`;

export const StyledLink = styled(Link)`
  color: #007bff;
  font-size: 12px;
  display: block;
  margin-bottom: 1rem;
`;
