import React from "react";
import { HeroContainer } from "./preview-hero.styles";

export const PreviewHero = ({ movieBackDrop }) => {
  return <HeroContainer movieBackDrop={`https://image.tmdb.org/t/p/original/${movieBackDrop}`}></HeroContainer>;
};
