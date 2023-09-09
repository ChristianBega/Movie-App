import React from "react";
import { StyledLandingContent } from "./landing-content.styles";

export const LandingContent = ({ content }) => {
  const { title, text, imageUrl } = content;
  return (
    <StyledLandingContent>
      <h2>{title}</h2>
      <p>{text}</p>
      <div>Img</div>
      {/* <img src="" alt="" /> */}
    </StyledLandingContent>
  );
};
