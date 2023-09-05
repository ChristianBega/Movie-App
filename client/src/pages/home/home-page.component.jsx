import React, { useEffect } from "react";
import { HeroImageSlider } from "../../components/hero-image-slider/hero-image-slider.component";
import { SectionSliderRail } from "../../components/section-slider-rail/section-slider-rail.component";
import { SliderRailsSection } from "./home-page.styles";
// Make two fetch calls - one for movies one for tv show per genre
// take the response and
// const TEST_DATA = [
//   {
//     sectionName: "My favorites",
//     fetchUrl: "",
//   },
//   {
//     sectionName: "Drama",
//     fetchUrl: `${genreFetchUrl}18`,
//   },
// ];
export const HomePage = () => {
  const genreFetchUrl =
    "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=";

  const staticMovieAndShowsSectionData = [
    {
      sectionName: "My favorites",
      fetchUrl: "",
    },
    {
      sectionName: "For you",
      fetchUrl: "",
    },
    {
      sectionName: "Just Added",
      fetchUrl: "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
    },
    // movie genres 13
    {
      sectionName: "Action",
      fetchUrl: `${genreFetchUrl}28`,
    },
    {
      sectionName: "Adventure",
      fetchUrl: `${genreFetchUrl}12`,
    },
    {
      sectionName: "Animation",
      fetchUrl: `${genreFetchUrl}16`,
    },
    {
      sectionName: "Comedy",
      fetchUrl: `${genreFetchUrl}35`,
    },
    {
      sectionName: "Crime",
      fetchUrl: `${genreFetchUrl}80`,
    },
    {
      sectionName: "Drama",
      fetchUrl: `${genreFetchUrl}18`,
    },
    {
      sectionName: "Family",
      fetchUrl: `${genreFetchUrl}10751`,
    },
    {
      sectionName: "Fantasy",
      fetchUrl: `${genreFetchUrl}14`,
    },
    {
      sectionName: "Horror",
      fetchUrl: `${genreFetchUrl}27`,
    },
    {
      sectionName: "Mystery",
      fetchUrl: `${genreFetchUrl}9648`,
    },
    {
      sectionName: "Romance",
      fetchUrl: `${genreFetchUrl}10749`,
    },
    {
      sectionName: "SciFi",
      fetchUrl: `${genreFetchUrl}878`,
    },
    {
      sectionName: "Thriller",
      fetchUrl: `${genreFetchUrl}53`,
    },
    // tv genres 13
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <section id="hero-image-slider-section">
        <HeroImageSlider />
      </section>
      <SliderRailsSection id="slider-rails-section">
        {staticMovieAndShowsSectionData.map((sectionData, index) => {
          return <SectionSliderRail key={index} sectionData={sectionData} />;
        })}
      </SliderRailsSection>
    </>
  );
};
