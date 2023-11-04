import React, { lazy, Suspense, useContext, useState } from "react";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { useMediaQuery } from "react-responsive";

const SectionSliderRailCard = lazy(() => import("../section-slider-rail-card/section-slider-rail-card.component"));

import {
  LeftArrowButton,
  RightArrowButton,
  StyledSliderRailContainer,
  StyledSliderRailHeader,
  StyledSliderWrapper,
} from "./section-slider-rail.styles";
import { useHorizontalScroll } from "./useSideScroll";
import { sliderVariants } from "../../setup/animations/framer-motion-variants";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { LoadingCard } from "../loading/loading-card/loading-card.component";
import { RecommendationContext } from "../../setup/contexts/recommendations.context";
import LoadingScreen from "../../pages/loading/loading-page.component";

const SectionSliderRail = ({ sectionData, urlPath, mediaType }) => {
  // console.log(mediaType);
  const { count } = useContext(RecommendationContext);
  const sliderRef = useHorizontalScroll();

  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1023 });
  const isDesktop = useMediaQuery({ minWidth: 1024 });

  const [isHovered, setIsHovered] = useState(false);

  const generateUrl = ({ sectionData }) => {
    const options = {
      headers: {
        accept: "application/json",
        Authorization: import.meta.env.VITE_AUTHORIZATION,
      },
    };
    return axios.get(urlPath + sectionData.id || sectionData.fetchUrl, options);
  };

  const { isLoading, data, isError, error, isFetched } = useQuery(["sectionData", sectionData], () => generateUrl({ sectionData }), {
    enabled: !!sectionData,
  });

  const calculateScrollAmount = () => (isMobile ? 400 : isTablet ? 550 : isDesktop ? 800 : 2000);

  const handleScroll = (direction) => {
    const container = sliderRef.current;

    if (container) {
      const scrollAmount = calculateScrollAmount();
      if (direction === "left") {
        container.scrollLeft -= scrollAmount;
      } else if (direction === "right") {
        container.scrollLeft += scrollAmount;
      }
    }
  };

  if (isLoading) {
    return <LoadingScreen />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  return (
    <>
      <StyledSliderRailHeader>{sectionData?.sectionName || sectionData?.name || sectionData?.sectionName}</StyledSliderRailHeader>
      <StyledSliderWrapper onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
        <LeftArrowButton ishovered={isHovered.toString()} className="slider-navigation-buttons" onClick={() => handleScroll("left")}>
          <BiChevronLeft style={{ fontSize: "2rem" }} />
        </LeftArrowButton>
        {isFetched && (
          <StyledSliderRailContainer initial={sliderVariants.hidden} variants={sliderVariants} whileInView={sliderVariants.visible} ref={sliderRef}>
            {data.data.results.map((movie, index) => {
              return (
                <Suspense key={index} fallback={<LoadingCard />}>
                  <SectionSliderRailCard movie={movie} key={index + count} mediaType={mediaType || sectionData.mediaType} />
                </Suspense>
              );
            })}
          </StyledSliderRailContainer>
        )}
        <RightArrowButton ishovered={isHovered.toString()} className="slider-navigation-buttons" onClick={() => handleScroll("right")}>
          <BiChevronRight style={{ fontSize: "2rem" }} />
        </RightArrowButton>
      </StyledSliderWrapper>
    </>
  );
};

export default SectionSliderRail;
