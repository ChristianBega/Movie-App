import React from "react";
import { HeroImageSlider } from "../../components/hero-image-slider/hero-image-slider.component";
import { SectionSliderRail } from "../../components/section-slider-rail/section-slider-rail.component";
import { SliderRailsSection } from "./home-page.styles";

export const HomePage = () => {
  const genreFetchUrl =
    "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=";
  const mockData_REPLACE_LATER = [
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
      fetchUrl: "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=2",
    },
    // TOP 10 MOVIE GENRES
    {
      sectionName: "Horror",
      id: 27,
      fetchUrl: `${genreFetchUrl}27`,
    },
    {
      sectionName: "Action",
      fetchUrl: `${genreFetchUrl}28`,
      id: 28,
    },
    {
      sectionName: "Comedy",
      fetchUrl: `${genreFetchUrl}35`,
      id: 35,
    },
    {
      sectionName: "Drama",
      fetchUrl: `${genreFetchUrl}18`,
      id: 18,
    },
    {
      sectionName: "Fantasy",
      fetchUrl: `${genreFetchUrl}14`,
      id: 14,
    },
    {
      sectionName: "Mystery",
      fetchUrl: `${genreFetchUrl}9648`,
      id: 9648,
    },
    {
      sectionName: "Thriller",
      fetchUrl: `${genreFetchUrl}53`,
      id: 53,
    },
    {
      sectionName: "Animation",
      fetchUrl: `${genreFetchUrl}16`,
      id: 16,
    },
    {
      sectionName: "SciFi",
      fetchUrl: `${genreFetchUrl}878`,
      id: 878,
    },
    {
      sectionName: "Romance",
      fetchUrl: `${genreFetchUrl}10749`,
      id: 10749,
    },
  ];
  return (
    <>
      <section id="hero-image-slider-section">
        <HeroImageSlider />
      </section>
      <SliderRailsSection id="slider-rails-section">
        {mockData_REPLACE_LATER.map((sectionData) => {
          return <SectionSliderRail sectionData={sectionData} />;
        })}
      </SliderRailsSection>
    </>
  );
};
