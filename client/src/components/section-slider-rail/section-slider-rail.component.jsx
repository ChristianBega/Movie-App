import React, { useEffect, useState } from "react";
import axios from "axios";
import { SectionSliderRailCard } from "../section-slider-rail-card/section-slider-rail-card.component";
import { StyledSliderRailContainer, StyledSliderRailHeader } from "./section-slider-rail.styles";
import { useHorizontalScroll } from "./useSideScroll";

export const SectionSliderRail = ({ sectionData }) => {
  // console.log(sectionData);

  const [fetchedData, setFetchedData] = useState();
  const ref = useHorizontalScroll();

  useEffect(() => {
    const options = {
      headers: {
        accept: "application/json",
        Authorization: import.meta.env.VITE_AUTHORIZATION,
      },
    };
    const fetchCategoryData = async () => {
      try {
        const response = await axios.get(sectionData?.fetchUrl, options);
        const res = response.data.results;
        setFetchedData({ ...fetchedData, res });
      } catch (error) {
        console.error(error);
      }
    };
    fetchCategoryData();
  }, [setFetchedData, sectionData]);

  return (
    <>
      <StyledSliderRailHeader>{sectionData?.sectionName}</StyledSliderRailHeader>
      <StyledSliderRailContainer ref={ref}>
        {fetchedData?.res?.map((movie, index) => {
          return <SectionSliderRailCard movie={movie} key={index} />;
        })}
      </StyledSliderRailContainer>
    </>
  );
};
