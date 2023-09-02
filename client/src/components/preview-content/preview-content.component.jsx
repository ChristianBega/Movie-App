import React from "react";
import TomatoImage from "../../../src/assets/tomato.png";
import { PreviewContentContainer } from "./preview-content.styles";

export const PreviewContent = ({ movie }) => {
  const { original_title, overview, vote_average, title, poster_path, release_date, genre_ids, backdrop_path } = movie;

  const generateGenre = (id) => {
    switch (id) {
      case 27:
        // Code to handle case 1 with id 'case1'
        return "Horror";
        break;
      case 28:
        // Code to handle case 2 with id 'case2'
        return "Action";
        break;
      case 35:
        // Code to handle case 3 with id 'case3'
        return "Comedy";
        break;
      case 18:
        // Code to handle case 3 with id 'case3'
        return "Drama";
        break;
      case 35:
        // Code to handle case 3 with id 'case3'
        return "Comedy";
        break;
      case 14:
        // Code to handle case 3 with id 'case3'
        return "Fantasy";
        break;
      case 9648:
        // Code to handle case 3 with id 'case3'
        return "Mystery";
        break;
      case 53:
        // Code to handle case 3 with id 'case3'
        return "Thriller";
        break;
      case 16:
        // Code to handle case 3 with id 'case3'
        return "Animation";
        break;
      case 878:
        // Code to handle case 3 with id 'case3'
        return "SciFi";
        break;
      case 10749:
        // Code to handle case 3 with id 'case3'
        return "Romance";
        break;
      default:
        // Code to handle the default case if the ID doesn't match any case
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
          return <p>&nbsp; &#183; &nbsp;{generateGenre(id)}&nbsp;</p>;
        })}
      </span>
      <p className="movie-overview">{overview}</p>
    </PreviewContentContainer>
  );
};
