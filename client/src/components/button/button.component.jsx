import React from "react";
import { BaseButton, FormButton, InvertedButton } from "./button.styles";

export const BUTTON_TYPES_CLASSES = {
  base: "base",
  form: "form",
  inverted: "inverted",
};

const getButton = (buttonType = BUTTON_TYPES_CLASSES.base) =>
  ({
    [BUTTON_TYPES_CLASSES.base]: BaseButton,
    [BUTTON_TYPES_CLASSES.inverted]: InvertedButton,
    [BUTTON_TYPES_CLASSES.form]: FormButton,
  }[buttonType]);

const CustomButton = ({ children, buttonType, ...otherProps }) => {
  const CustomButton = getButton(buttonType);
  return <CustomButton {...otherProps}>{children}</CustomButton>;
};

export default CustomButton;
