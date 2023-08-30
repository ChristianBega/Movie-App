import React from "react";
import { PiPlus, PiTelevision } from "react-icons/pi";
import { MdOutlineMovieFilter } from "react-icons/md";
import { LiaHomeSolid } from "react-icons/lia";
import { Link } from "react-router-dom";

const navigationListItems = [
  { icon: <LiaHomeSolid />, name: "home", urlPath: "/home" },
  { icon: <MdOutlineMovieFilter />, name: "movies", urlPath: "/movies" },
  { icon: <PiTelevision />, name: "tv shows", urlPath: "/tv-shows" },
  { icon: <PiPlus />, name: "my stuff", urlPath: "/my-stuff" },
];

export const NavigationList = ({ setIsOpen }) => {
  const handleListItemOnClick = () => {
    setIsOpen(false);
  };
  return (
    <ul>
      {navigationListItems.map(({ icon, name, urlPath }) => {
        return (
          <li style={{ color: "#fff" }}>
            <Link to={urlPath} onClick={handleListItemOnClick}>
              <span style={{ fontSize: "1.2rem" }}>{icon}</span>
              {name.toUpperCase()}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
