import React from "react";
import { PiPlus, PiTelevision } from "react-icons/pi";
import { MdOutlineMovieFilter } from "react-icons/md";
import { LiaHomeSolid } from "react-icons/lia";
import { Link } from "react-router-dom";
import { NavigationListContainer } from "./navigation-list.styles";
import SearchBar from "../../searchBar";

const navigationListItems = [
  { icon: <LiaHomeSolid />, name: "home", urlPath: "/" },
  { icon: <MdOutlineMovieFilter />, name: "movies", urlPath: "/movies" },
  { icon: <PiTelevision />, name: "tv shows", urlPath: "/tv-shows" },
  { icon: <PiPlus />, name: "my stuff", urlPath: "/my-stuff" },
];

export const NavigationList = ({ setIsOpen, setCurrentMenuItem }) => {
  const handleListItemOnClick = (event) => {
    setIsOpen(false);
    setCurrentMenuItem(event.currentTarget.id);
  };
  return (
    <NavigationListContainer>
      {navigationListItems.map(({ icon, name, urlPath }) => {
        return (
          <li key={name}>
            <Link
              className="link-list-item"
              id={name}
              style={{ display: "flex", alignItems: " center" }}
              to={urlPath}
              onClick={handleListItemOnClick}
            >
              <span className="nav-list-icon">{icon}</span>
              {name.toUpperCase()}
            </Link>
          </li>
        );
      })}
    </NavigationListContainer>
  );
};
