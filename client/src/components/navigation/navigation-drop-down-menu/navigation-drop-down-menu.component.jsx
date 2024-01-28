import React, { useState } from "react";
import CustomButton, { BUTTON_TYPES_CLASSES } from "../../button/button.component";
import { FiChevronDown } from "react-icons/fi";
import { NavigationList } from "../navigation-list/navigation-list.component";
import { PiXBold } from "react-icons/pi";
import { DropDownMenu, GlobalStyle } from "./navigation-drop-down-menu.styles";
import SearchBar from "../../searchBar";
export const NavigationDropDownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentMenuItem, setCurrentMenuItem] = useState("Home");

  const handleMenuClickEvent = () => {
    if (!isOpen) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  };
  return (
    <div style={{ overflow: "hidden" }}>
      {isOpen && <GlobalStyle />}
      <CustomButton buttonType={BUTTON_TYPES_CLASSES.dropdown} className="navigation-drop-down-button" onClick={handleMenuClickEvent}>
        <span>{currentMenuItem.toUpperCase()}</span>
        <FiChevronDown />
      </CustomButton>
      {isOpen && (
        <DropDownMenu>
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <CustomButton buttonType={BUTTON_TYPES_CLASSES.close} onClick={handleMenuClickEvent}>
              <PiXBold style={{ color: "#fff", fontSize: "24px" }} />
            </CustomButton>
          </div>
          <div
            style={{
              marginTop: "2rem",
              display: "flex",
              justifyContent: "center",
              // backgroundColor: "#000000",
              // width: "100% ",
              // paddingBlock: "2rem",
            }}
          >
            <SearchBar />
          </div>
          <NavigationList setIsOpen={setIsOpen} setCurrentMenuItem={setCurrentMenuItem} />
          {/* <div style={{ display: "flex", justifyContent: "center" }}>
            <CustomButton buttonType={BUTTON_TYPES_CLASSES.close} onClick={handleMenuClickEvent}>
              <PiXBold style={{ color: "#fff", fontSize: "24px" }} />
            </CustomButton>
          </div> */}
        </DropDownMenu>
      )}
    </div>
  );
};
