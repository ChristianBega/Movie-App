import React from "react";
import TomatoImage from "../../../src/assets/tomato.png";
import { PreviewContentContainer } from "./preview-content.styles";
import { AiOutlinePlus } from "react-icons/ai";
import CustomButton, { BUTTON_TYPES_CLASSES } from "../button/button.component";
import { generateGenre } from "../../utils/generateGenre";
export const PreviewContent = ({ movie }) => {
  console.log(movie);
  const { overview, vote_average, title, release_date, genre_ids, name, first_air_date } = movie;

  return (
    <PreviewContentContainer>
      <h2 className="movie-title">{title || name}</h2>
      <p className="movie-release-date">({release_date?.slice(0, 4) || first_air_date?.slice(0, 4)})</p>
      <span className="movie-details">
        <div>
          <img src={TomatoImage} />
        </div>
        <small>{vote_average * 10}%</small>
        {genre_ids?.slice(0, 4).map((id) => {
          return <p key={id}>&nbsp; &#183; &nbsp;{generateGenre(id)}&nbsp;</p>;
        })}
      </span>
      <p className="movie-overview">{overview}</p>
      <CustomButton buttonType={BUTTON_TYPES_CLASSES.favorites}>
        <AiOutlinePlus />
        Add to favorites
      </CustomButton>
    </PreviewContentContainer>
  );
};
