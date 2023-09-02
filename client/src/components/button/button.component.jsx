import React from "react";
import { BaseButton, CloseButton, DropDownMenuButton, FavoritesButton, FormButton, InvertedButton } from "./button.styles";

export const BUTTON_TYPES_CLASSES = {
  base: "base",
  form: "form",
  inverted: "inverted",
  dropdown: "dropdown",
  close: "close",
  favorites: "favorites",
};

const getButton = (buttonType = BUTTON_TYPES_CLASSES.base) =>
  ({
    [BUTTON_TYPES_CLASSES.base]: BaseButton,
    [BUTTON_TYPES_CLASSES.inverted]: InvertedButton,
    [BUTTON_TYPES_CLASSES.form]: FormButton,
    [BUTTON_TYPES_CLASSES.dropdown]: DropDownMenuButton,
    [BUTTON_TYPES_CLASSES.close]: CloseButton,
    [BUTTON_TYPES_CLASSES.favorites]: FavoritesButton,
  }[buttonType]);

const CustomButton = ({ children, buttonType, ...otherProps }) => {
  const CustomButton = getButton(buttonType);
  return <CustomButton {...otherProps}>{children}</CustomButton>;
};

export default CustomButton;
