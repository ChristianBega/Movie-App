import React, { useContext, useEffect, useState } from "react";
import { SectionSliderRail } from "../../components/section-slider-rail/section-slider-rail.component";
import { SliderRailsSection } from "../movies/movies-page.styles";
import { GenresContext } from "../../contexts/genres.context";
import axios from "axios";

// Fetch all genres
// take all genres and map to fetch all all movies
const queryForMovieWithGenresURL =
  "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=";
const queryMovieGenresURL = "https://api.themoviedb.org/3/genre/movie/list?language=en";
// Response from fetching all movie genres

export const MoviesPage = () => {
  const [fetchedData, setFetchedData] = useState();

  useEffect(() => {
    const options = {
      headers: {
        accept: "application/json",
        Authorization: import.meta.env.VITE_AUTHORIZATION,
      },
    };
    const fetchAllMovieGenresData = async () => {
      try {
        const response = await axios.get(queryMovieGenresURL, options);
        const res = response.data.genres;
        setFetchedData(res);
      } catch (error) {
        console.error(error);
      }
    };
    fetchAllMovieGenresData();
  }, []);
  return (
    <SliderRailsSection>
      {fetchedData ? (
        <>
          {fetchedData.map((item, index) => {
            return <SectionSliderRail key={index} urlPath={queryForMovieWithGenresURL} sectionData={item} />;
          })}
        </>
      ) : (
        "Loading"
      )}
    </SliderRailsSection>
  );
};
