import React, { useEffect, useState } from "react";
import { StyledLandingContent } from "./landing-content.styles";
import { useMediaQuery } from "react-responsive";

export const LandingContent = ({ content, index }) => {
  const { title, text, imageUrl, alt, backgroundImage } = content;
  const tabletAndBelow = useMediaQuery({ maxWidth: "1024px" });

  const calculateDynamicDimensions = (backgroundImage) => {
    if (tabletAndBelow) {
      const updatedHeight = backgroundImage?.styling?.height / 1.7;
      const updatedWidth = backgroundImage?.styling?.width / 1.7;
      const updatedLeft = backgroundImage?.styling?.left / 1.5;
      const updatedTop = backgroundImage?.styling?.top / 5;
      const updatedBottom = backgroundImage?.styling?.bottom / 1.5;
      return {
        ...backgroundImage,
        styling: {
          ...backgroundImage.styling,
          height: updatedHeight,
          width: updatedWidth,
          left: updatedLeft,
          top: updatedTop,
          bottom: updatedBottom,
        },
      };
    }
    return backgroundImage;
  };

  const [dynamicBackgroundImage, setDynamicBackgroundImage] = useState(backgroundImage);

  useEffect(() => {
    setDynamicBackgroundImage(calculateDynamicDimensions(backgroundImage));
  }, [tabletAndBelow, backgroundImage]);

  return (
    <StyledLandingContent backgroundImage={dynamicBackgroundImage}>
      {tabletAndBelow ? (
        <>
          <div className="text-container">
            <h2>{title}</h2>
            <p>{text}</p>
          </div>
          <div className="image-container">
            <img src={imageUrl} alt={alt} />
          </div>
        </>
      ) : (
        <>
          {index % 2 === 0 ? (
            <>
              <div className="image-container">
                <img src={imageUrl} alt={alt} />
              </div>
              <div className="text-container">
                <h2>{title}</h2>
                <p>{text}</p>
              </div>
            </>
          ) : (
            <>
              <div className="text-container">
                <h2>{title}</h2>
                <p>{text}</p>
              </div>
              <div className="image-container">
                <img src={imageUrl} alt={alt} />
              </div>
            </>
          )}
        </>
      )}
    </StyledLandingContent>
  );
};
