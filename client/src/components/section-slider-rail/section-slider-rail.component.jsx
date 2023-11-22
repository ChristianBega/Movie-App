import React, { lazy, Suspense, useContext, useEffect, useState } from "react";
import axios, { all } from "axios";
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
import CustomButton, { BUTTON_TYPES_CLASSES } from "../button/button.component";
import { device } from "../../device-breakpoints.styles";

const SectionSliderRail = ({ sectionData, urlPath, mediaType }) => {
  const { count } = useContext(RecommendationContext);
  const sliderRef = useHorizontalScroll();

  //! Media queries for secondary handleScroll
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1023 });
  const isDesktop = useMediaQuery({ minWidth: 1024 });

  const [isHovered, setIsHovered] = useState(false);
  const [page, setPage] = useState(1);
  const [allData, setAllData] = useState([]);

  const generateUrl = ({ sectionData, page }) => {
    let updatedUrl;
    if (!sectionData.fetchUrl) {
      const baseUrl = urlPath + sectionData.id;
      const searchParams = new URLSearchParams(baseUrl);
      searchParams.set("page", page.toString());
      updatedUrl = `${baseUrl.split("?")[0]}?${searchParams.toString()}`;
    } else {
      const baseUrl = sectionData.fetchUrl;
      const searchParams = new URLSearchParams(baseUrl);
      searchParams.set("page", page.toString());
      updatedUrl = `${baseUrl.split("?")[0]}?${searchParams.toString()}`;
    }
    const options = {
      headers: {
        accept: "application/json",
        Authorization: import.meta.env.VITE_AUTHORIZATION,
      },
    };

    return axios.get(updatedUrl, options);
  };

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

  const { isLoading, isError, error, isFetched, refetch } = useQuery(["sectionData", sectionData, page], () => generateUrl({ sectionData, page }), {
    enabled: !!sectionData,
    onSuccess: (newData) => {
      setAllData((prevData) => [...new Set([...prevData, newData.data])]);
    },
  });

  useEffect(() => {
    const handleScrollAfterRefetchAndRemount = () => {
      const container = sliderRef.current;
      if (container) {
        const childElements = container.children;
        const distanceFromLast = isMobile ? 21 : isTablet ? 17 : device.laptop ? 17 : isDesktop ? 21 : 14;
        const targetIndex = childElements?.length > distanceFromLast ? childElements?.length - 1 - distanceFromLast : null;
        const targetElement = targetIndex !== null ? childElements[targetIndex] : null;
        if (targetElement) {
          const containerRect = container.getBoundingClientRect();
          const targetRect = targetElement.getBoundingClientRect();

          const targetPosition = {
            top: targetRect.top - containerRect.top - 64,
            left: targetRect.left - containerRect.left,
          };

          container.scrollTo({
            ...targetPosition,
            behavior: "smooth",
          });
        } else {
        }
      }
    };

    handleScrollAfterRefetchAndRemount();
  }, [allData]);

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
