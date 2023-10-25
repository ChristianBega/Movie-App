import React, { useEffect, useState } from "react";
import { HeroContainer } from "./preview-hero.styles";
import CustomButton, { BUTTON_TYPES_CLASSES } from "../../../../components/button/button.component";
import { Link } from "react-router-dom";
import { BiChevronLeft } from "react-icons/bi";

export const PreviewHero = ({ movieBackDrop, previousPath }) => {
  const [originalPath, setOriginalPath] = useState(previousPath);

  useEffect(() => {
    if (previousPath === "/" || previousPath === "/movies" || previousPath === "/tv-shows" || previousPath === "/my-stuff") {
      setOriginalPath(previousPath);
    }
  }, [previousPath]);

  return (
    <>
      <HeroContainer moviebackdrop={`https://image.tmdb.org/t/p/original/${movieBackDrop}`}>
        <CustomButton buttonType={BUTTON_TYPES_CLASSES.back}>
          <Link to={originalPath === "/preview" ? `/` : originalPath}>
            <BiChevronLeft style={{ fontSize: "2rem" }} />
          </Link>
        </CustomButton>
      </HeroContainer>
    </>
  );
};
