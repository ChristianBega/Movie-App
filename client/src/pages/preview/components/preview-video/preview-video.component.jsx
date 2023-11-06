import React, { useState, useEffect } from "react";
import { PreviewVideoContainer } from "./preview-video.styles";
import { useMediaQuery } from "react-responsive";
import { device } from "../../../../device-breakpoints.styles";

const PreviewVideoPlayer = ({ trailer, viewTrailer }) => {
  console.log(trailer);
  const [officialTrailer, setOfficialTrailer] = useState();
  const isLaptopOrLarger = useMediaQuery({
    query: device.desktop,
  });

  const findOfficialTrailer = (arr) => {
    for (const video of arr) {
      if (/\bOfficial Trailer\b/i.test(video.name)) {
        return video;
      } else if (/(official trailer|Trailer|trailer)/i.test(video.name)) {
        return video;
      }
    }
    return arr[0];
  };

  useEffect(() => {
    if (trailer) {
      const test = findOfficialTrailer(trailer);
      setOfficialTrailer(test);
    }
  }, [trailer]);

  if (viewTrailer) {
    return (
      <PreviewVideoContainer id="preview-video-container" className="video-player-container">
        <iframe
          width={isLaptopOrLarger ? "100%" : "100%"}
          height={isLaptopOrLarger ? "400px" : "300px"}
          src={`https://www.youtube.com/embed/${officialTrailer?.key}`}
          title="YouTube video player"
          allowFullScreen
        ></iframe>
      </PreviewVideoContainer>
    );
  } else {
    return null; // Return null or any other content you want when viewTrailer is false
  }
};

export default PreviewVideoPlayer;
