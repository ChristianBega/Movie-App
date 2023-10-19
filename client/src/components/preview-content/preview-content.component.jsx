import React, { useContext, useEffect, useState } from "react";
import TomatoImage from "../../../src/assets/tomato.png";
import { PreviewContentContainer } from "./preview-content.styles";
import { AiOutlineCheck, AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import CustomButton, { BUTTON_TYPES_CLASSES } from "../button/button.component";
import { generateGenre } from "../../utils/generateGenre";
import { createFavoriteDocumentIfAuthenticated } from "../../utils/firebase/favorites.firebase";
import { UserContext } from "../../contexts/user.context";
import { FavoritesContext } from "../../contexts/favorites.context";

export const PreviewContent = ({ movie, mediaType }) => {
  const { overview, vote_average, title, release_date, genre_ids, name, first_air_date, id } = movie;
  const { currentUser } = useContext(UserContext);
  const { fetchFavorites, currentFavorites } = useContext(FavoritesContext);
  const [showSuccessAlert, setShowSuccessAlert] = useState(null);
  const [status, setStatus] = useState(null);

  useEffect(() => {
    fetchFavorites();
  }, []);

  useEffect(() => {
    setStatus(null);
  }, [movie]);

  const checkIfAddedToFavorites = (itemId) => {
    return !!currentFavorites.find((item) => item.id === itemId);
  };

  const handleAddToFavorites = async () => {
    try {
      await createFavoriteDocumentIfAuthenticated(id, mediaType, currentUser.uid);
      setStatus(true);
      setShowSuccessAlert(true);
      setTimeout(() => {
        setShowSuccessAlert(false);
      }, 3000);
    } catch (error) {
      setStatus(false);
    }
  };

  const handleRemoveFromFavorites = async () => {
    try {
      //  await removeFavoriteDocumentIfAuthenticated(id, mediaType, currentUser.uid);
      //  setStatus(true);
    } catch (error) {
      //  setStatus(false);
    }
  };

  return (
    <PreviewContentContainer>
      <h2 className="movie-title">{title || name}</h2>
      <p className="movie-release-date">({release_date?.slice(0, 4) || first_air_date?.slice(0, 4)})</p>
      <span className="movie-details">
        <div>
          <img src={TomatoImage} alt="Tomato" />
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

      <>
        {checkIfAddedToFavorites(id) ? (
          <>
            <CustomButton onClick={handleRemoveFromFavorites} buttonType={BUTTON_TYPES_CLASSES.removeFavorites}>
              <AiOutlineMinus />
              Remove from favorites
            </CustomButton>
          </>
        ) : (
          <>
            {status === true ? (
              <div className="button-container">
                <CustomButton onClick={handleRemoveFromFavorites} buttonType={BUTTON_TYPES_CLASSES.removeFavorites}>
                  <AiOutlineMinus />
                  Remove from favorites
                </CustomButton>
                {showSuccessAlert && (
                  <p className="success-alert">
                    <span>Added</span> <AiOutlineCheck />
                  </p>
                )}
              </div>
            ) : (
              <CustomButton onClick={handleAddToFavorites} buttonType={BUTTON_TYPES_CLASSES.favorites}>
                <AiOutlinePlus />
                Add to favorites
              </CustomButton>
            )}
          </>
        )}
      </>
    </PreviewContentContainer>
  );
};
