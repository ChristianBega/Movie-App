import React from "react";
import { StyledSliderRailCard } from "./section-slider-rail-card.styles";

export const SectionSliderRailCard = ({ movie }) => {
  const { originalTitle, vote_average, release_date, title, poster_path } = movie;
  return (
    <StyledSliderRailCard className="card" image={`https://image.tmdb.org/t/p/original/${poster_path}`} title={title} rating={vote_average}>
      {/* <img style={{ height: "135px", width: "195px" }} src={`https://image.tmdb.org/t/p/original/${poster_path}`} /> */}
      <p>{originalTitle}</p>
      {/* <p>{overview}</p> */}
      {/* <p>{vote_average * 10}%</p>
      <p>{release_date}</p>
      <p>{title}</p> */}
    </StyledSliderRailCard>
  );
};

// TV show - image, title, genre, seasons

// Movie - title, rating, genre, year
