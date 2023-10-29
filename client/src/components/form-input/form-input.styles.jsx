import { styled } from "styled-components";
import { BOX_SHADOW_INPUT } from "../../index.styles";

export const StyledFormInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1.5rem;

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

export const StyledSelectInput = styled.select`
  background-image: ${({ rgbaColors }) => `linear-gradient(160deg, ${rgbaColors[0]} 50%, ${rgbaColors[1]} 90%)`};
`;
