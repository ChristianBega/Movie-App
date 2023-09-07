import React from "react";
import {
  BackButton,
  BaseButton,
  CloseButton,
  DropDownMenuButton,
  FavoritesButton,
  FavoritesButtonSm,
  FormButton,
  InvertedButton,
} from "./button.styles";

export const BUTTON_TYPES_CLASSES = {
  base: "base",
  form: "form",
  inverted: "inverted",
  dropdown: "dropdown",
  close: "close",
  favorites: "favorites",
  favoritesSm: "favoritesSm",
  back: "back",
};

const getButton = (buttonType = BUTTON_TYPES_CLASSES.base) =>
  ({
    [BUTTON_TYPES_CLASSES.base]: BaseButton,
    [BUTTON_TYPES_CLASSES.inverted]: InvertedButton,
    [BUTTON_TYPES_CLASSES.form]: FormButton,
    [BUTTON_TYPES_CLASSES.dropdown]: DropDownMenuButton,
    [BUTTON_TYPES_CLASSES.close]: CloseButton,
    [BUTTON_TYPES_CLASSES.favorites]: FavoritesButton,
    [BUTTON_TYPES_CLASSES.favoritesSm]: FavoritesButtonSm,
    [BUTTON_TYPES_CLASSES.back]: BackButton,
  }[buttonType]);

const CustomButton = ({ children, buttonType, ...otherProps }) => {
  const CustomButton = getButton(buttonType);
  return <CustomButton {...otherProps}>{children}</CustomButton>;
};

export default CustomButton;
