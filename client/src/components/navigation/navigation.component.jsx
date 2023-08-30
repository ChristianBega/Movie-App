import React, { useContext, useState } from "react";
import { NavigationItemContainer, NavigationBar, StyleLogo, DropDownMenu } from "./navigation.styles";
import CustomButton, { BUTTON_TYPES_CLASSES } from "../button/button.component";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/authentication.context";
import { signOutUser } from "../../utils/firebase.utils";
import { FiChevronDown } from "react-icons/fi";
import { PiXBold } from "react-icons/pi";
import { NavigationList } from "../../components/navigation-list/navigation-list.component";
import { useMediaQuery } from "react-responsive";
import { device } from "../../device-breakpoints.styles";

// import { DropDownMenu } from "../button/button.styles";

export const Navigation = () => {
  const { isAuthorized } = useContext(AuthContext);
  console.log(isAuthorized);

  const [isOpen, setIsOpen] = useState(false);

  const handleMenuClickEvent = () => {
    if (!isOpen) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  };

  const isLaptopOrLarger = useMediaQuery({
    query: device.desktop,
  });

  return (
    <NavigationBar>
      <StyleLogo>
        <Link to="/">Logo</Link>
      </StyleLogo>
      {isAuthorized ? (
        <NavigationItemContainer>
          {isLaptopOrLarger ? (
            <NavigationList />
          ) : (
            <>
              <CustomButton
                buttonType={BUTTON_TYPES_CLASSES.dropdown}
                className="navigation-drop-down-button"
                onClick={handleMenuClickEvent}
                isOpen={isOpen}
              >
                <span>Home</span>
                <FiChevronDown />
              </CustomButton>
              {isOpen && (
                <DropDownMenu>
                  <CustomButton buttonType={BUTTON_TYPES_CLASSES.close} onClick={handleMenuClickEvent}>
                    <PiXBold style={{ fontSize: "1.2rem", color: "#fff" }} />
                  </CustomButton>
                  <NavigationList setIsOpen={setIsOpen} />
                </DropDownMenu>
              )}
            </>
          )}
          <div className="navigation-menu-item">Search bar</div>
          <div className="navigation-menu-item">Account</div>
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
