import React, { useState } from "react";
import CustomButton, { BUTTON_TYPES_CLASSES } from "../button/button.component";
import { FiChevronDown } from "react-icons/fi";
import { NavigationList } from "../navigation-list/navigation-list.component";
import { PiXBold } from "react-icons/pi";
import { DropDownMenu } from "./navigation-drop-down-menu.styles";
export const NavigationDropDownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuClickEvent = () => {
    if (!isOpen) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  };
  return (
    <>
      <CustomButton buttonType={BUTTON_TYPES_CLASSES.dropdown} className="navigation-drop-down-button" onClick={handleMenuClickEvent}>
        <span>Home</span>
        <FiChevronDown />
      </CustomButton>
      {isOpen && (
        <DropDownMenu>
          <CustomButton buttonType={BUTTON_TYPES_CLASSES.close} onClick={handleMenuClickEvent}>
            <PiXBold style={{ color: "#fff", fontSize: "24px" }} />
          </CustomButton>
          <NavigationList setIsOpen={setIsOpen} />
        </DropDownMenu>
      )}
    </>
  );
};
