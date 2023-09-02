import React from "react";
import { SectionSliderRail } from "../section-slider-rail/section-slider-rail.component";

export const PreviewRelatedSuggestions = ({ movieGenres }) => {
  const genres = movieGenres.join("%2C");
  let sectionData = {
    sectionName: "You may also like",
    fetchUrl:
      "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=" +
      genres,
  };

  return <SectionSliderRail sectionData={sectionData} />;
};
