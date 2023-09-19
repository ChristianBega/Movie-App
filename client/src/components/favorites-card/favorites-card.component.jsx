import React from "react";
import { StyledFavoritesCard, StyledTextContainer } from "./favorites-card.styles";
import TomatoImage from "../../../src/assets/tomato.png";
import { Link } from "react-router-dom";
import { LoadingFavoriteCard } from "../../components/loading/loading-favorite-card/loading-favorite-card.component";
export const FavoritesCard = ({ movie }) => {
  const { title, overview, name, air_date, season_number, backdrop_path, budget, vote_average, genres, poster_path } = movie;
  return (
    <>
      {!backdrop_path ? (
        <LoadingFavoriteCard />
      ) : (
        <StyledFavoritesCard image={`https://image.tmdb.org/t/p/original/${backdrop_path || poster_path}`}>
          {/* <Link to="/preview" state={{ movie: movie, mediaType: mediaType }}> */}
          <StyledTextContainer className="text-container">
            <h3>{title || name}</h3>
            <span>
              <img src={TomatoImage} width="25px" height="25px"></img>
              <small>{vote_average * 10}%</small>
            </span>
          </StyledTextContainer>
        </StyledFavoritesCard>
      )}
    </>
  );
};
