import React, { useContext } from "react";
import { PreviewHero } from "../../components/preview-hero/preview-hero.component";
import { PreviewContent } from "../../components/preview-content/preview-content.component";
import SectionSliderRail from "../../components/section-slider-rail/section-slider-rail.component";
import { PreviewContentSection } from "./preview-page.styles";
import { RecommendationContext } from "../../contexts/recommendations.context";

const PreviewPage = () => {
  const { previousPath, currentSectionData, location } = useContext(RecommendationContext);
  return (
    <div style={{ position: "relative" }}>
      <section id="preview-hero-section">
        <PreviewHero previousPath={previousPath} movieBackDrop={location?.state?.movie?.backdrop_path} />
      </section>
      <PreviewContentSection id="preview-content-section">
        <PreviewContent movie={location?.state?.movie} mediaType={location?.state?.mediaType} />
      </PreviewContentSection>
      <section id="related-suggestions" style={{ marginTop: "2rem", padding: ".2rem" }}>
        {currentSectionData.map((section) => {
          return <SectionSliderRail key={`${section.sectionName}-${section.id}`} sectionData={section} />;
        })}
      </section>
    </div>
  );
};

export default PreviewPage;
