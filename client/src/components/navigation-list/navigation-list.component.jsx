import React from "react";
import { PiPlus, PiTelevision } from "react-icons/pi";
import { MdOutlineMovieFilter } from "react-icons/md";
import { LiaHomeSolid } from "react-icons/lia";
import { Link } from "react-router-dom";
import { NavigationListContainer } from "./navigation-list.styles";

const navigationListItems = [
  { icon: <LiaHomeSolid />, name: "home", urlPath: "/" },
  { icon: <MdOutlineMovieFilter />, name: "movies", urlPath: "/movies" },
  { icon: <PiTelevision />, name: "tv shows", urlPath: "/tv-shows" },
  { icon: <PiPlus />, name: "my stuff", urlPath: "/my-stuff" },
];

export const NavigationList = ({ setIsOpen }) => {
  const handleListItemOnClick = () => {
    setIsOpen(false);
  };
  return (
    <NavigationListContainer>
      {navigationListItems.map(({ icon, name, urlPath }) => {
        return (
          <li>
            <Link style={{ display: "flex", alignItems: " center" }} to={urlPath} onClick={handleListItemOnClick}>
              <span style={{ fontSize: "1.2rem" }}>{icon}</span>
              {name.toUpperCase()}
            </Link>
          </li>
        );
      })}
    </NavigationListContainer>
  );
};
