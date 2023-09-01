import React, { useEffect, useState } from "react";
import axios from "axios";
import { SectionSliderRailCard } from "../section-slider-rail-card/section-slider-rail-card.component";
import { StyledSliderRailContainer } from "./section-slider-rail.styles";
import { useHorizontalScroll } from "./useSideScroll";

export const SectionSliderRail = ({ sectionData }) => {
  const [fetchedData, setFetchedData] = useState();
  const ref = useHorizontalScroll();
  useEffect(() => {
    const options = {
      headers: {
        accept: "application/json",
        Authorization: import.meta.env.VITE_AUTHORIZATION,
      },
    };
    const getUser = async () => {
      try {
        const response = await axios.get("https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1", options);
        const res = response.data.results;
        setFetchedData({ ...fetchedData, res });
      } catch (error) {
        console.error(error);
      }
    };
    getUser();
  }, [setFetchedData]);

  const { sectionName } = sectionData;
  return (
    <>
      <h2>{sectionName}</h2>
      <StyledSliderRailContainer ref={ref}>
        {fetchedData?.res?.map((movie, index) => {
          return <SectionSliderRailCard movie={movie} key={index} />;
        })}
      </StyledSliderRailContainer>
    </>
  );
};

// TV show - image, title, genre, seasons

// Movie - title, rating, genre, year
