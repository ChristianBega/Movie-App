import React, { useContext } from "react";
import TomatoImage from "../../../src/assets/tomato.png";
import { PreviewContentContainer } from "./preview-content.styles";
import { AiOutlinePlus } from "react-icons/ai";
import CustomButton, { BUTTON_TYPES_CLASSES } from "../button/button.component";
import { generateGenre } from "../../utils/generateGenre";
import { createFavoriteDocumentIfAuthenticated } from "../../utils/firebase/favorites.firebase";
import { UserContext } from "../../contexts/user.context";
export const PreviewContent = ({ movie, mediaType }) => {
  const { overview, vote_average, title, release_date, genre_ids, name, first_air_date, id } = movie;
  console.log(mediaType);
  const { currentUser } = useContext(UserContext);

  const handleAddToFavorites = async () => {
    await createFavoriteDocumentIfAuthenticated(id, mediaType, currentUser.uid);
  };

  return (
    <PreviewContentContainer>
      <h2 className="movie-title">{title || name}</h2>
      <p className="movie-release-date">({release_date?.slice(0, 4) || first_air_date?.slice(0, 4)})</p>
      <span className="movie-details">
        <div>
          <img src={TomatoImage} />
        </div>
        <small>{vote_average * 10}%</small>
        <div className="genres-container">
          {genre_ids?.slice(0, 4).map((id) => {
            return (
              <p key={id} className="genre">
                &#183; &nbsp;{generateGenre(id)}&nbsp;
              </p>
            );
          })}
        </div>
      </span>
      <p className="movie-overview">{overview}</p>
      <CustomButton onClick={handleAddToFavorites} buttonType={BUTTON_TYPES_CLASSES.favorites}>
        <AiOutlinePlus />
        Add to favorites
      </CustomButton>
    </PreviewContentContainer>
  );
};
