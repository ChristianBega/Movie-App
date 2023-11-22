import { useEffect } from "react";

const useSideScrollAfterRefetchAndRemount = (sliderRef, isMobile, isTablet, device, isDesktop, allData) => {
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
          return;
        }
      }
    };

    handleScrollAfterRefetchAndRemount();
  }, [allData, sliderRef, isMobile, isTablet, device, isDesktop]);
};

export default useSideScrollAfterRefetchAndRemount;
