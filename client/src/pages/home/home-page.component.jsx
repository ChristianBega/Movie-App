import React from "react";
import { HeroImageSlider } from "../../components/hero-image-slider/hero-image-slider.component";
import { SectionSliderRail } from "../../components/section-slider-rail/section-slider-rail.component";

export const HomePage = () => {
  const mockData_REPLACE_LATER = [
    {
      sectionName: "My favorites",
      // preview - array of first 8 objects - slice the 0-8
    },
    {
      sectionName: "For you",
      // preview - array of first 8 objects - slice the 0-8
    },
    {
      sectionName: "Just Added",
      // preview - array of first 8 objects - slice the 0-8
    },
    // TOP 10 MOVIE GENRES
    {
      sectionName: "Horror",
      // preview - array of first 8 objects - slice the 0-8
    },
    {
      sectionName: "Action",
      // preview - array of first 8 objects - slice the 0-8
    },
    {
      sectionName: "Comedy",
      // preview - array of first 8 objects - slice the 0-8
    },
    {
      sectionName: "Drama",
      // preview - array of first 8 objects - slice the 0-8
    },
    {
      sectionName: "Fantasy",
      // preview - array of first 8 objects - slice the 0-8
    },
    {
      sectionName: "Mystery",
      // preview - array of first 8 objects - slice the 0-8
    },
    {
      sectionName: "Thriller",
      // preview - array of first 8 objects - slice the 0-8
    },
    {
      sectionName: "Anime",
      // preview - array of first 8 objects - slice the 0-8
    },
    {
      sectionName: "SciFi",
      // preview - array of first 8 objects - slice the 0-8
    },
    {
      sectionName: "Romance",
      // preview - array of first 8 objects - slice the 0-8
    },
  ];
  return (
    <>
      <section id="hero-image-slider-section">
        <HeroImageSlider />
      </section>
      <section id="section-slider-rails">
        {mockData_REPLACE_LATER.map((sectionData) => {
          return <SectionSliderRail sectionData={sectionData} />;
        })}
      </section>
    </>
  );
};
