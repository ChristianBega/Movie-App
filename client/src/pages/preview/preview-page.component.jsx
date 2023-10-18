import React, { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { PreviewHero } from "../../components/preview-hero/preview-hero.component";
import { PreviewContent } from "../../components/preview-content/preview-content.component";
import SectionSliderRail from "../../components/section-slider-rail/section-slider-rail.component";
import { PreviewContentSection } from "./preview-page.styles";
import { convertMovieGenreId, convertTvGenreId } from "../../utils/convertGenreId";
import { RecommendationContext } from "../../contexts/recommendations.context";

// https://api.themoviedb.org/3/movie/{movie_id}/recommendations

const PreviewPage = () => {
  const { previousPath, count, currentSectionData, location } = useContext(RecommendationContext);

  return (
    <div style={{ position: "relative" }}>
      <section id="preview-hero-section">
        <h1 style={{ fontSize: "100px", color: "red", fontWeight: "bold" }}>{count}</h1>
        <PreviewHero previousPath={previousPath} movieBackDrop={location?.state?.movie?.backdrop_path} />
      </section>
      <PreviewContentSection id="preview-content-section">
        <PreviewContent movie={location?.state?.movie} mediaType={location?.state?.mediaType} />
      </PreviewContentSection>
      <section id="related-suggestions" style={{ marginTop: "2rem", padding: "1rem" }}>
        {currentSectionData.map((section, index) => {
          return <SectionSliderRail key={`${section.sectionName}-${index}`} sectionData={section} />;
        })}
      </section>
    </div>
  );
};

export default PreviewPage;
