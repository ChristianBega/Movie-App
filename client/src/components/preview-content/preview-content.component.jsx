import React from "react";
import TomatoImage from "../../../src/assets/tomato.png";
import { PreviewContentContainer } from "./preview-content.styles";
import { AiOutlinePlus } from "react-icons/ai";
import CustomButton, { BUTTON_TYPES_CLASSES } from "../button/button.component";
export const PreviewContent = ({ movie }) => {
  const { original_title, overview, vote_average, title, poster_path, release_date, genre_ids, backdrop_path } = movie;

  const generateGenre = (id) => {
    switch (id) {
      case 27:
        return "Horror";
        break;
      case 28:
        return "Action";
        break;
      case 35:
        return "Comedy";
        break;
      case 18:
        return "Drama";
        break;
      case 35:
        return "Comedy";
        break;
      case 14:
        return "Fantasy";
        break;
      case 9648:
        return "Mystery";
        break;
      case 53:
        return "Thriller";
        break;
      case 16:
        return "Animation";
        break;
      case 878:
        return "SciFi";
        break;
      case 10749:
        return "Romance";
        break;
      case 37:
        return "Western";
        break;
      case 10752:
        return "War";
        break;
      case 10770:
        return "TV Movie";
        break;
      case 36:
        return "History";
        break;
      case 10751:
        return "Family";
        break;
      case 99:
        return "Documentary";
        break;
      case 80:
        return "Crime";
        break;
      case 12:
        return "Adventure";
        break;
      case 10402:
        return "Music";
      default:
        return "Unknown";
    }
  };
  return (
    <PreviewContentContainer>
      <h2 className="movie-title">{title}</h2>
      <p className="movie-release-date">({release_date.slice(0, 4)})</p>
      <span className="movie-details">
        <div>
          <img src={TomatoImage} />
        </div>
        <small>{vote_average * 10}%</small>
        {genre_ids.slice(0, 3).map((id) => {
          return (
            <>
              <p key={id}>&nbsp; &#183; &nbsp;{generateGenre(id)}&nbsp;</p>
              <small>{id}</small>
            </>
          );
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
