import React, { useContext, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { PreviewHero } from "../../components/preview-hero/preview-hero.component";
import { PreviewContent } from "../../components/preview-content/preview-content.component";
import { SectionSliderRail } from "../../components/section-slider-rail/section-slider-rail.component";
import { RecommendationContext } from "../../contexts/recommendations.context";

export const PreviewPage = () => {
  const location = useLocation();
  const { currentSectionData, setCurrentGenres } = useContext(RecommendationContext);

  useEffect(() => {
    setCurrentGenres([]);
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div>
        <Link to="/">{/* <BsChevronLeft /> */}</Link>
      </div>
      <section id="preview-hero-section">
        <PreviewHero movieBackDrop={location.state.movie.backdrop_path} />
      </section>
      <section id="preview-content-section">
        <PreviewContent movie={location.state.movie} />
      </section>
      <section id="related-suggestions" style={{ marginTop: "2rem", padding: "1rem" }}>
        <SectionSliderRail sectionData={currentSectionData} />
      </section>
    </>
  );
};
