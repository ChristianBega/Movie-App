import React, { useContext } from "react";
import { NavigationBar, StyleLogo } from "./navigation.styles";
import CustomButton, { BUTTON_TYPES_CLASSES } from "../button/button.component";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/authentication.context";

export const Navigation = () => {
  const { isAuthorized } = useContext(AuthContext);

  return (
    <NavigationBar>
      <StyleLogo>
        <Link to={isAuthorized ? "/home" : "/"}>Logo</Link>
      </StyleLogo>
      <CustomButton>
        <Link to="/sign-up">Sign In</Link>
      </CustomButton>
    </NavigationBar>
  );
};
