import React from "react";
import { StyledLandingContent } from "./landing-content.styles";
import { useMediaQuery } from "react-responsive";

export const LandingContent = ({ content, index }) => {
  const { title, text, imageUrl, alt, backgroundImage } = content;
  const tabletAndBelow = useMediaQuery({ maxWidth: "1024px" });

  return (
    <StyledLandingContent backgroundImage={backgroundImage}>
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

      {/* <img src="" alt="" /> */}
    </StyledLandingContent>
  );
};
