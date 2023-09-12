import React, { lazy, Suspense } from "react";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
// import { SectionSliderRailCard } from "../section-slider-rail-card/section-slider-rail-card.component";
const SectionSliderRailCard = lazy(() => import("../section-slider-rail-card/section-slider-rail-card.component"));
import { StyledSliderRailContainer, StyledSliderRailHeader } from "./section-slider-rail.styles";
import { useHorizontalScroll } from "./useSideScroll";
import { sliderVariants } from "../../animations/framer-motion-variants";
const SectionSliderRail = ({ sectionData, urlPath }) => {
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
      <StyledSliderRailHeader>{sectionData?.sectionName || sectionData?.name || sectionData?.sectionName}</StyledSliderRailHeader>
      {isFetched && (
        <StyledSliderRailContainer initial={sliderVariants.hidden} variants={sliderVariants} whileInView={sliderVariants.visible} ref={sliderRef}>
          {data.data.results.map((movie, index) => {
            return (
              <Suspense key={index} fallback={<div>Loading...</div>}>
                <SectionSliderRailCard movie={movie} key={index} />
              </Suspense>
            );
          })}
        </StyledSliderRailContainer>
      )}
    </>
  );
};

export default SectionSliderRail;
