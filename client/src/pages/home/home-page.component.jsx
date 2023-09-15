import React, { Suspense, lazy } from "react";

import { SliderRailsSection } from "./home-page.styles";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { LoadingRail } from "../../components/loading/loading-rail/loading-rail.component";
import { LoadingHero } from "../../components/loading/loading-hero/loading-hero.component";
const SectionSliderRail = lazy(() => import("../../components/section-slider-rail/section-slider-rail.component"));
const HeroImageSlider = lazy(() => import("../../components/hero-image-slider/hero-image-slider.component"));
const genreFetchUrl =
  "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=";

const topRatedFetchUrl = "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1";

const staticMovieAndShowsSectionData = [
  // {
  //   sectionName: "My favorites",
  //   fetchUrl: "",
  // },
  // {
  //   sectionName: "For you",
  //   fetchUrl: "",
  // },
  {
    sectionName: "Just Added",
    fetchUrl: "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
    mediaType: "movie",
  },
  // movie genres 13
  {
    sectionName: "Action",
    fetchUrl: `${genreFetchUrl}28`,
    mediaType: "movie",
  },
  {
    sectionName: "Adventure",
    fetchUrl: `${genreFetchUrl}12`,
    mediaType: "movie",
  },
  {
    sectionName: "Animation",
    fetchUrl: `${genreFetchUrl}16`,
    mediaType: "movie",
  },
  {
    sectionName: "Comedy",
    fetchUrl: `${genreFetchUrl}35`,
    mediaType: "movie",
  },
  {
    sectionName: "Crime",
    fetchUrl: `${genreFetchUrl}80`,
    mediaType: "movie",
  },
  {
    sectionName: "Drama",
    fetchUrl: `${genreFetchUrl}18`,
    mediaType: "movie",
  },
  {
    sectionName: "Family",
    fetchUrl: `${genreFetchUrl}10751`,
    mediaType: "movie",
  },
  {
    sectionName: "Fantasy",
    fetchUrl: `${genreFetchUrl}14`,
    mediaType: "movie",
  },
  {
    sectionName: "Horror",
    fetchUrl: `${genreFetchUrl}27`,
    mediaType: "movie",
  },
  {
    sectionName: "Mystery",
    fetchUrl: `${genreFetchUrl}9648`,
    mediaType: "movie",
  },
  {
    sectionName: "Romance",
    fetchUrl: `${genreFetchUrl}10749`,
    mediaType: "movie",
  },
  {
    sectionName: "SciFi",
    fetchUrl: `${genreFetchUrl}878`,
    mediaType: "movie",
  },
  {
    sectionName: "Thriller",
    fetchUrl: `${genreFetchUrl}53`,
    mediaType: "movie",
  },
  // tv genres 13
];

const HomePage = () => {
  const generateUrl = () => {
    const options = {
      headers: {
        accept: "application/json",
        Authorization: import.meta.env.VITE_AUTHORIZATION,
      },
    };
    return axios.get(topRatedFetchUrl, options);
  };

  const { isLoading, data, isError, error } = useQuery(["top-rated"], generateUrl);

  if (isLoading) {
    return <h1>Loading spinner waiting....</h1>;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  return (
    <>
      <section id="hero-image-slider-section">
        <Suspense fallback={<LoadingHero />}>
          <HeroImageSlider topRated={data.data.results.slice(0, 6)} />
        </Suspense>
      </section>
      <SliderRailsSection id="slider-rails-section">
        {staticMovieAndShowsSectionData.map((sectionData, index) => {
          return (
            <Suspense key={index} fallback={<LoadingRail />}>
              <SectionSliderRail sectionData={sectionData} />
            </Suspense>
          );
        })}
      </SliderRailsSection>
    </>
  );
};

export default HomePage;
