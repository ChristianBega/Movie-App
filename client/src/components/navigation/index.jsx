import React, { useContext } from "react";
import { NavigationItemContainer, NavigationBar, StyleLogo, StyledProfileImage } from "./navigation.styles";
import CustomButton from "../button/button.component";
import { Link, useLocation } from "react-router-dom";
import { AuthContext } from "../../setup/contexts/authentication.context";
import { NavigationList } from "./navigation-list/navigation-list.component";
import { useMediaQuery } from "react-responsive";
import { device } from "../../device-breakpoints.styles";
import { NavigationDropDownMenu } from "./navigation-drop-down-menu/navigation-drop-down-menu.component";
import { VscAccount } from "react-icons/vsc";
import { UserContext } from "../../setup/contexts/user.context";
import "../../app.scss";
import SearchBar from "../searchBar";
export const Navigation = () => {
  const { isAuthorized } = useContext(AuthContext);
  const { currentProfileAccount } = useContext(UserContext);

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
          {isLaptopOrLarger ? (
            <>
              <NavigationList />
              <SearchBar />
            </>
          ) : (
            <>
              <NavigationDropDownMenu />
            </>
          )}
          <Link to="/profile" className="navigation-menu-item">
            {isAuthorized && location.pathname !== "/profile" && (
              <>
                {currentProfileAccount.profileImg ? (
                  <StyledProfileImage src={currentProfileAccount.profileImg} alt="User profile image" />
                ) : (
                  <VscAccount style={{ fontSize: "2.8rem" }} />
                )}
              </>
            )}
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
