import React, { lazy, Suspense, useContext, useEffect, useState } from "react";
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
import { useHorizontalScroll } from "./hooks/useSideScroll";
import { sliderVariants } from "../../setup/animations/framer-motion-variants";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { LoadingCard } from "../loading/loading-card/loading-card.component";
import { RecommendationContext } from "../../setup/contexts/recommendations.context";
import LoadingScreen from "../../pages/loading/loading-page.component";
import CustomButton, { BUTTON_TYPES_CLASSES } from "../button/button.component";
import { device } from "../../device-breakpoints.styles";
import { generateUrl } from "./utils/generateUrl";
import useSideScrollAfterRefetchAndRemount from "./hooks/useSideScrollAfterRefetchAndRemount";
const SectionSliderRail = ({ sectionData, urlPath, mediaType }) => {
  const { count } = useContext(RecommendationContext);
  const sliderRef = useHorizontalScroll();

  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1023 });
  const isDesktop = useMediaQuery({ minWidth: 1024 });

  const [isHovered, setIsHovered] = useState(false);
  const [page, setPage] = useState(1);
  const [allData, setAllData] = useState([]);

  const allResults = allData.map((item) => {
    return item.results.map((result) => {
      return result;
    });
  });

  const fetchNextPage = async () => {
    const response = await refetch({ page: page });
    const newDataForNextPage = response.data.data;
    setAllData((prevData) => [...prevData, newDataForNextPage]);
  };

  const handleViewMore = () => {
    setPage((prevPage) => prevPage + 1);
    fetchNextPage();
  };

  const { isLoading, isError, error, isFetched, refetch } = useQuery(
    ["sectionData", sectionData, page],
    () => generateUrl({ sectionData, page, urlPath }),
    {
      enabled: !!sectionData,
      onSuccess: (newData) => {
        setAllData((prevData) => [...new Set([...prevData, newData.data])]);
      },
    }
  );

  useSideScrollAfterRefetchAndRemount(sliderRef, isMobile, isTablet, device, isDesktop, allData);

  //! Secondary handleScroll for buttons
  const handleScroll = (direction) => {
    const calculateScrollAmount = () => (isMobile ? 400 : isTablet ? 550 : isDesktop ? 800 : 2000);
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
        {isDesktop && (
          <LeftArrowButton ishovered={isHovered.toString()} className="slider-navigation-buttons" onClick={() => handleScroll("left")}>
            <BiChevronLeft style={{ fontSize: "2rem" }} />
          </LeftArrowButton>
        )}
        {isFetched && (
          <StyledSliderRailContainer initial={sliderVariants.hidden} variants={sliderVariants} whileInView={sliderVariants.visible} ref={sliderRef}>
            {allResults.flat().map((movie, index) => {
              return (
                <Suspense key={index} fallback={<LoadingCard />}>
                  <SectionSliderRailCard movie={movie} key={index + count} mediaType={mediaType || sectionData.mediaType} />
                </Suspense>
              );
            })}
            <CustomButton id="view-more" buttonType={BUTTON_TYPES_CLASSES.viewMore} onClick={handleViewMore}>
              View More
            </CustomButton>
          </StyledSliderRailContainer>
        )}
        {isDesktop && (
          <RightArrowButton ishovered={isHovered.toString()} className="slider-navigation-buttons" onClick={() => handleScroll("right")}>
            <BiChevronRight style={{ fontSize: "2rem" }} />
          </RightArrowButton>
        )}
      </StyledSliderWrapper>
    </>
  );
};

export default SectionSliderRail;
