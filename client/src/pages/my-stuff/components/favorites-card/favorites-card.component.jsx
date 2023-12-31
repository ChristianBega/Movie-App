import React from "react";
import { StyledFavoritesCard, StyledTextContainer } from "./favorites-card.styles";
import TomatoImage from "../../../../assets/tomato.png";
import { Link } from "react-router-dom";
import { LoadingFavoriteCard } from "../../../../components/loading/loading-favorite-card/loading-favorite-card.component";
export const FavoritesCard = ({ movie, error, mediaType }) => {
  const { title, overview, name, air_date, season_number, backdrop_path, budget, vote_average, genres, poster_path } = movie;
  return (
    <>
      {error ? (
        <LoadingFavoriteCard />
      ) : (
        <Link to="/preview" state={{ movie: movie, previousPath: location.pathname, mediaType: mediaType }}>
          <StyledFavoritesCard image={`https://image.tmdb.org/t/p/original/${backdrop_path || poster_path}`}>
            <StyledTextContainer className="text-container">
              <h3>{title || name}</h3>
              <span>
                <img src={TomatoImage} width="24px" height="24px"></img>
                <p>{vote_average.toFixed(1) * 10}%</p>
              </span>
            </StyledTextContainer>
          </StyledFavoritesCard>
        </Link>
      )}
    </>
  );
};
