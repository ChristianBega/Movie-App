import { styled } from "styled-components";
import { FORM_HEADER_1, LOGO, PADDING_SM } from "../../../../index.styles";
import { Link } from "react-router-dom";

export const StyledForm = styled.form`
  ${PADDING_SM}
  display : flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  /* border: 1px solid red; */
  height: 70vh;
  max-width: 650px;
  margin: 1rem auto;

  & .form-header-container {
    height: 75px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 2rem;
    h1 {
      ${FORM_HEADER_1}
      margin-bottom: .5rem;
      span {
        ${LOGO}
      }
    }
  }
`;

export const StyledLink = styled(Link)`
  color: #007bff;
  font-size: 12px;
  display: block;
  margin-bottom: 1rem;
`;
export const StyledOption = styled.option`
  background-color: ${({ colorOne, colorTwo }) => `linear-gradient(160deg, ${colorOne} 50%, ${colorTwo} 90%) !important`};
  /* background-color: red; This works, but i wont let me add props as the colors */
`;
