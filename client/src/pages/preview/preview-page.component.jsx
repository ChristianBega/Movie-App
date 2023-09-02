import React from "react";
import { Link, useLocation } from "react-router-dom";
import { PreviewHero } from "../../components/preview-hero/preview-hero.component";
import { PreviewContent } from "../../components/preview-content/preview-content.component";
// import BsChevronLeft from "react-icons/bs";
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
    </>
  );
};
