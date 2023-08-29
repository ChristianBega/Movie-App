import React from "react";
import { NavigationBar, StyleLogo } from "./navigation.styles";
import CustomButton, { BUTTON_TYPES_CLASSES } from "../button/button.component";

export const Navigation = () => {
  return (
    <NavigationBar>
      <StyleLogo>Logo</StyleLogo>
      <CustomButton>Sign In</CustomButton>
    </NavigationBar>
  );
};
