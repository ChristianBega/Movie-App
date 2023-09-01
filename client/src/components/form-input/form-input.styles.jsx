import { styled } from "styled-components";
import { BOX_SHADOW_INPUT } from "../../index.styles";
export const StyledFormInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
  /* border: 1px solid red; */
  & .form-input {
    ${BOX_SHADOW_INPUT}
    width: 100%;
    padding: 10px;
    border: 1px solid #504f4f;
    border-radius: 20px;
    font-size: 16px;
    color: #afafaf;
  }
`;
