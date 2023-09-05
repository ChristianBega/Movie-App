import React, { useEffect, useState } from "react";
import axios from "axios";
import { SectionSliderRailCard } from "../section-slider-rail-card/section-slider-rail-card.component";
import { StyledSliderRailContainer, StyledSliderRailHeader } from "./section-slider-rail.styles";
import { useHorizontalScroll } from "./useSideScroll";
import { useLocation } from "react-router-dom";

export const SectionSliderRail = ({ sectionData, urlPath }) => {
  const location = useLocation();
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
        const response = await axios.get(urlPath ? urlPath + sectionData.id : sectionData.fetchUrl, options);
        const res = response.data.results;
        setFetchedData({ ...fetchedData, res });
      } catch (error) {
        console.error(error);
      }
    };
    fetchCategoryData();
  }, [urlPath, sectionData]);

  return (
    <>
      <StyledSliderRailHeader>{sectionData?.sectionName || sectionData?.name}</StyledSliderRailHeader>
      <StyledSliderRailContainer ref={ref}>
        {fetchedData ? (
          <>
            {fetchedData.res.map((movie, index) => {
              return <SectionSliderRailCard movie={movie} key={index} />;
            })}
          </>
        ) : (
          "Loading"
        )}
      </StyledSliderRailContainer>
    </>
  );
};
