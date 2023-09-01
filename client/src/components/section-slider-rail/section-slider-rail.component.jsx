import React, { useEffect, useState } from "react";
import axios from "axios";
import { SectionSliderRailCard } from "../section-slider-rail-card/section-slider-rail-card.component";
import { StyledSliderRailContainer } from "./section-slider-rail.styles";
import { useHorizontalScroll } from "./useSideScroll";

export const SectionSliderRail = ({ sectionData }) => {
  const { sectionName, fetchUrl } = sectionData;

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
        const response = await axios.get(fetchUrl, options);
        const res = response.data.results;
        setFetchedData({ ...fetchedData, res });
      } catch (error) {
        console.error(error);
      }
    };
    getUser();
  }, [setFetchedData]);

  console.log(fetchedData?.res?.slice(0, 8));

  return (
    <>
      <h2>{sectionName}</h2>
      <StyledSliderRailContainer ref={ref}>
        {fetchedData?.res?.slice(0, 12).map((movie, index) => {
          return <SectionSliderRailCard movie={movie} key={index} />;
        })}
      </StyledSliderRailContainer>
    </>
  );
};
