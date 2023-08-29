import { styled } from "styled-components";
import { DEFAULT_HOVER } from "../../index.styles";

export const BaseButton = styled.button`
  background-color: lightblue;
  padding: 0.7rem 1rem;
  ${DEFAULT_HOVER}
`;
export const InvertedButton = styled.button`
  border: 2px solid red;
  color: #000;
  padding: 0.7rem 1rem;
  ${DEFAULT_HOVER}
`;

export const FormButton = styled.button`
  border: 1px solid green;
  color: #000;
  padding: 0.7rem 1rem;
  ${DEFAULT_HOVER}
`;
