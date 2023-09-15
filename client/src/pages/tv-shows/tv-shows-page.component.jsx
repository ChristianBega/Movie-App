import React, { useEffect, useState } from "react";
import { SliderRailsSection } from "./tv-shows-page.styles";
import axios from "axios";
import SectionSliderRail from "../../components/section-slider-rail/section-slider-rail.component";

const queryForTvShowsWithGenresURL =
  "https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=";
const queryTvShowGenresURL = "https://api.themoviedb.org/3/genre/tv/list?language=en";

const TvShowsPage = () => {
  const [fetchedData, setFetchedData] = useState();

  useEffect(() => {
    const options = {
      headers: {
        accept: "application/json",
        Authorization: import.meta.env.VITE_AUTHORIZATION,
      },
    };
    const fetchAllTvShowGenresData = async () => {
      try {
        const response = await axios.get(queryTvShowGenresURL, options);
        const res = response.data.genres;
        setFetchedData(res);
      } catch (error) {
        console.error(error);
      }
    };
    fetchAllTvShowGenresData();
  }, []);
  return (
    <SliderRailsSection>
      {fetchedData ? (
        <>
          {fetchedData.map((item, index) => {
            return <SectionSliderRail key={index} urlPath={queryForTvShowsWithGenresURL} sectionData={item} mediaType={"tv"} />;
          })}
        </>
      ) : (
        "Loading"
      )}
    </SliderRailsSection>
  );
};

export default TvShowsPage;
