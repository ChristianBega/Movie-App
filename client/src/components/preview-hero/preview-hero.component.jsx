import React from "react";
import { HeroContainer } from "./preview-hero.styles";
import CustomButton, { BUTTON_TYPES_CLASSES } from "../button/button.component";
import { Link } from "react-router-dom";
import { BiChevronLeft } from "react-icons/bi";

export const PreviewHero = ({ movieBackDrop, previousPath }) => {
  return (
    <>
      <HeroContainer moviebackdrop={`https://image.tmdb.org/t/p/original/${movieBackDrop}`}>
        <CustomButton buttonType={BUTTON_TYPES_CLASSES.back}>
          <Link to={previousPath === "/" ? "/" : previousPath === "/movies" ? "/movies" : previousPath === "/tv-shows" ? "/tv-shows" : null}>
            <BiChevronLeft style={{ fontSize: "2rem" }} />
          </Link>
        </CustomButton>
      </HeroContainer>
    </>
  );
};
