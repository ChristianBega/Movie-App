import React, { useEffect, useState } from "react";
import { StyledFormInputContainer, StyledSelectInput } from "./form-input.styles";
const defaultColor = ["rgba(38, 60, 187, 0.7)", "rgba(43, 5, 90, 0.8)"];

export const FormInput = ({ label, type, rgba, children, ...otherProps }) => {
  const [rgbaColors, setRgbaColors] = useState(defaultColor);

  useEffect(() => {
    const rgbaRegex = /rgba\([^)]+\)/g;
    const unformattedRgbaValues = `${otherProps.value}`;
    const rgbaValues = unformattedRgbaValues.match(rgbaRegex);
    setRgbaColors(rgbaValues || defaultColor);
  }, [otherProps.value]);

  return (
    <StyledFormInputContainer>
      {label && <label>{label}</label>}
      {type === "select" ? (
        <>
          <StyledSelectInput rgbaColors={rgba ? rgbaColors : []} className="form-input" {...otherProps}>
            {children}
          </StyledSelectInput>
        </>
      ) : (
        <>
          <input className="form-input" type={type} {...otherProps} />
        </>
      )}
    </StyledFormInputContainer>
  );
};
