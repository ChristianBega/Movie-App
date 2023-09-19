import React from "react";
import { SkeletonHero } from "./loading-hero.styles";

export const LoadingHero = () => {
  return (
    <SkeletonHero>
      <div className="hero-text-container">
      <h1 className="hero-title">&nbsp;</h1>
        <span className="hero-details">
          <div className="hero-icon">&nbsp;</div>
          <small className="hero-rating">&nbsp;</small>
          <p className="hero-genres">&nbsp;</p>
        </span>  
      </div>
      <div className="hero-button-container">
        <div className="hero-button">&nbsp;</div>
        <div className="hero-button">&nbsp;</div>
      </div>
    </SkeletonHero>
  );
};
