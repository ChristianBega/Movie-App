import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { PreviewHero } from "../../components/preview-hero/preview-hero.component";
import { PreviewContent } from "../../components/preview-content/preview-content.component";
import SectionSliderRail from "../../components/section-slider-rail/section-slider-rail.component";
import { PreviewContentSection } from "./preview-page.styles";
import { convertMovieGenreId, convertTvGenreId } from "../../utils/convertGenreId";

const staticMovieAndShowsSectionData = [
  {
    sectionName: "Movies you may also like",
    fetchUrl:
      "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=",
  },
  {
    sectionName: "Tv Shows you may also like",
    fetchUrl:
      "https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=",
  },
];

const PreviewPage = () => {
  const location = useLocation();
  const [currentSectionData, setCurrentSectionData] = useState([]);
  const [currentGenres, setCurrentGenres] = useState(convertMovieGenreId(location?.state.movie.genre_ids) || []);
  const [currentTvGenres, setCurrentTvGenres] = useState(convertTvGenreId(location?.state.movie.genre_ids) || []);

  useEffect(() => {
    setCurrentGenres(location?.state.movie.genre_ids || []);
  }, [location?.state.movie.genre_ids]);

  useEffect(() => {
    // Update currentSectionData when both currentGenres and currentTvGenres are ready
    const updatedStaticMovieAndShowsSectionData = staticMovieAndShowsSectionData.map((item, index) => {
      if (index === 0) {
        return {
          ...item,
          fetchUrl: `${item.fetchUrl}${currentGenres?.filter(Boolean).join("%2C")}`,
        };
      } else if (index === 1) {
        return {
          ...item,
          fetchUrl: `${item.fetchUrl}${currentTvGenres?.filter(Boolean).join("%2C")}`,
        };
      }

      return item;
    });

    setCurrentSectionData(updatedStaticMovieAndShowsSectionData);
  }, [currentGenres, currentTvGenres]);

  return (
    <div style={{ position: "relative" }}>
      <section id="preview-hero-section">
        <PreviewHero movieBackDrop={location.state.movie?.backdrop_path} />
      </section>
      <PreviewContentSection id="preview-content-section">
        <PreviewContent movie={location.state.movie} />
      </PreviewContentSection>
      <section id="related-suggestions" style={{ marginTop: "2rem", padding: "1rem" }}>
        {currentSectionData.map((section, index) => {
          return <SectionSliderRail key={`${section.sectionName}-${index}`} sectionData={section} />;
        })}
      </section>
    </div>
  );
};

export default PreviewPage;
