import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { PreviewHero } from "../../components/preview-hero/preview-hero.component";
import { PreviewContent } from "../../components/preview-content/preview-content.component";
import { SectionSliderRail } from "../../components/section-slider-rail/section-slider-rail.component";
import { BiChevronLeft } from "react-icons/bi";
const staticMovieAndShowsSectionData = [
  {
    sectionName: "Movies you may also like",
    fetchUrl: "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&with_genres=",
  },
];

export const PreviewPage = () => {
  const location = useLocation();
  const [rerenderKey, setRerenderKey] = useState(0);
  const [currentSectionData, setCurrentSectionData] = useState();
  const [currentGenres, setCurrentGenres] = useState(location?.state?.movie.genre_ids || []);

  useEffect(() => {
    setCurrentGenres(location?.state?.movie.genre_ids);
  }, [location]);

  useEffect(() => {
    const newMovieFetchUrl = `${staticMovieAndShowsSectionData[0].fetchUrl}${currentGenres?.join("%2C")}`;
    setCurrentSectionData([{ ...staticMovieAndShowsSectionData, fetchUrl: newMovieFetchUrl }]);
    // Force a re-render by updating the key
    setRerenderKey((prevKey) => prevKey + 1);
  }, [currentGenres]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div>
        <Link to="/">
          <BiChevronLeft />
        </Link>
      </div>
      <section id="preview-hero-section">
        <PreviewHero movieBackDrop={location.state.movie.backdrop_path} />
      </section>
      <section id="preview-content-section">
        <PreviewContent movie={location.state.movie} />
      </section>
      <section id="related-suggestions" style={{ marginTop: "2rem", padding: "1rem" }}>
        {currentSectionData?.map((section, index) => {
          return <SectionSliderRail key={`${index}-${rerenderKey}`} sectionData={section} />;
        })}
      </section>
    </>
  );
};
