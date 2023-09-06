import React, { useEffect, useRef } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { SectionSliderRailCard } from "../section-slider-rail-card/section-slider-rail-card.component";
import { StyledSliderRailContainer, StyledSliderRailHeader } from "./section-slider-rail.styles";
import { useHorizontalScroll } from "./useSideScroll";
import { useScroll } from "framer-motion";

export const SectionSliderRail = ({ sectionData, urlPath }) => {
  const sliderRef = useHorizontalScroll();

  const generateUrl = () => {
    const options = {
      headers: {
        accept: "application/json",
        Authorization: import.meta.env.VITE_AUTHORIZATION,
      },
    };
    return axios.get(urlPath + sectionData.id || sectionData.fetchUrl, options);
  };

  const { isLoading, data, isError, error, isFetched } = useQuery([`${sectionData?.sectionName || sectionData?.name}`], generateUrl);

  if (isLoading) {
    return <h1>Loading in data...</h1>;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  return (
    <>
      <StyledSliderRailHeader>{sectionData?.sectionName || sectionData?.name}</StyledSliderRailHeader>
      {isFetched && (
        <StyledSliderRailContainer ref={sliderRef}>
          {data.data.results.map((movie, index) => {
            return <SectionSliderRailCard movie={movie} key={index} />;
          })}
        </StyledSliderRailContainer>
      )}
    </>
  );
};
