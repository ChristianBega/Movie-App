import React from "react";
import { StyledFormInputContainer } from "./form-input.styles";

export const FormInput = ({ label, ...otherProps }) => {
  return (
    <StyledFormInputContainer>
      {label && <label>{label}</label>}
      <input className="form-input" {...otherProps} />
    </StyledFormInputContainer>
  );
};
