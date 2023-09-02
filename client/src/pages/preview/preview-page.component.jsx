import React from "react";
import { Link, useLocation } from "react-router-dom";
import { PreviewHero } from "../../components/preview-hero/preview-hero.component";
import { PreviewContent } from "../../components/preview-content/preview-content.component";
import { PreviewRelatedSuggestions } from "../../components/preview-related-suggestions/preview-related-suggestions.component";
import { BsChevronLeft } from "react-icons/bs";
export const PreviewPage = () => {
  const location = useLocation();

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
        <PreviewRelatedSuggestions movieGenres={location.state.movie.genre_ids} />
      </section>
    </>
  );
};
