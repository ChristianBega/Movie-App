import React, { useContext } from "react";
import { NavigationBar, StyleLogo } from "./navigation.styles";
import CustomButton, { BUTTON_TYPES_CLASSES } from "../button/button.component";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/authentication.context";
import { signOutUser } from "../../utils/firebase.utils";

export const Navigation = () => {
  const { isAuthorized } = useContext(AuthContext);
  console.log(isAuthorized);

  return (
    <NavigationBar>
      <StyleLogo>
        <Link to="/">Logo</Link>
      </StyleLogo>
      {isAuthorized ? (
        <>
          <p>Search bar</p>
          <p>Account</p>
          <CustomButton onClick={signOutUser}>Logout</CustomButton>
        </>
      ) : (
        <div style={{ display: "flex", gap: "1rem" }}>
          <CustomButton>
            <Link to="/authenticate-user" state={{ linkType: "sign-in" }}>
              Sign In
            </Link>
          </CustomButton>
          <CustomButton>
            <Link to="/authenticate-user" state={{ linkType: "sign-up" }}>
              Sign Up
            </Link>
          </CustomButton>
        </div>
      )}
    </NavigationBar>
  );
};
