import React, { useContext } from "react";
import { NavigationItemContainer, NavigationBar, StyleLogo } from "./navigation.styles";
import CustomButton from "../button/button.component";
import { Link, useLocation } from "react-router-dom";
import { AuthContext } from "../../contexts/authentication.context";
import { NavigationList } from "../../components/navigation-list/navigation-list.component";
import { useMediaQuery } from "react-responsive";
import { device } from "../../device-breakpoints.styles";
import { NavigationDropDownMenu } from "../navigation-drop-down-menu/navigation-drop-down-menu.component";
import { VscAccount } from "react-icons/vsc";
import "../../app.scss";
export const Navigation = () => {
  const { isAuthorized } = useContext(AuthContext);
  const location = useLocation();

  const isLaptopOrLarger = useMediaQuery({
    query: device.desktop,
  });

  return (
    <NavigationBar>
      <StyleLogo>
        <Link to="/" className="logo">
          NextFlix
        </Link>
      </StyleLogo>
      {isAuthorized ? (
        <NavigationItemContainer>
          {isLaptopOrLarger ? <NavigationList /> : <NavigationDropDownMenu />}
          {/* <div className="navigation-menu-item">Search bar</div> */}
          <Link to="/profile" className="navigation-menu-item">
            {isAuthorized && location.pathname !== "/profile" && <VscAccount style={{ fontSize: "2.2rem" }} />}
          </Link>
        </NavigationItemContainer>
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
