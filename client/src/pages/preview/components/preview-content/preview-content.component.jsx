import React, { useContext, useEffect, useState } from "react";
import TomatoImage from "../../../../assets/tomato.png";
import { PreviewContentContainer } from "./preview-content.styles";
import { AiOutlineCheck, AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import CustomButton, { BUTTON_TYPES_CLASSES } from "../../../../components/button/button.component";
import { generateGenre } from "../../../../setup/utils/generateGenre";
import { createFavoriteDocumentIfAuthenticated, deleteFavoriteDocumentIfAuthenticated } from "../../../../setup/utils/firebase/favorites.firebase";
import { UserContext } from "../../../../setup/contexts/user.context";
import { FavoritesContext } from "../../../../setup/contexts/favorites.context";
import PreviewVideoPlayer from "../preview-video/preview-video.component";
import { CiPlay1 } from "react-icons/ci";

import axios from "axios";
export const PreviewContent = ({ movie = {}, mediaType }) => {
  const { overview, vote_average, title, release_date, genre_ids, genres, name, first_air_date, id } = movie;
  const { activeUser } = useContext(UserContext);
  const { fetchFavorites, currentFavorites } = useContext(FavoritesContext);
  const [showSuccessAlert, setShowSuccessAlert] = useState(null);
  const [status, setStatus] = useState(null);
  const [trailer, setTrailer] = useState();
  const [viewTrailer, setViewTrailer] = useState(false);

  const checkIfAddedToFavorites = (itemId) => {
    if (!itemId) return;
    if (!currentFavorites) return;
    return !!currentFavorites.find((item) => item.id === itemId);
  };

  const handleAddToFavorites = async () => {
    try {
      await createFavoriteDocumentIfAuthenticated(id, mediaType, activeUser);
      setStatus(true);
      setShowSuccessAlert("Added to favorites");
      setTimeout(() => {
        setShowSuccessAlert(null);
      }, 2000);
    } catch (error) {
      setStatus(false);
    }
  };

  const handleRemoveFromFavorites = async () => {
    try {
      await deleteFavoriteDocumentIfAuthenticated(id, activeUser);
      setStatus(true);
      setShowSuccessAlert("Removed from favorites");
      setTimeout(() => {
        setStatus(false);
        setShowSuccessAlert(null);
      }, 2000);
      fetchFavorites(); // currentFavorites state updates after being removed, rendering the correct button
    } catch (error) {
      setStatus(false);
    }
  };

  const handleWatchTrailer = async () => {
    setViewTrailer(!viewTrailer);
  };
  useEffect(() => {
    fetchFavorites();
  }, []);

  useEffect(() => {
    setStatus(null);
    setViewTrailer(false);
  }, [movie]);

  useEffect(() => {
    const fetchTrailer = async () => {
      const options = {
        headers: {
          accept: "application/json",
          Authorization: import.meta.env.VITE_AUTHORIZATION,
        },
      };
      const trailer = await axios.get(`https://api.themoviedb.org/3/${mediaType}/${id}/videos`, options);
      setTrailer(trailer);
    };
    fetchTrailer();
  }, [mediaType, id, movie]);

  return (
    <PreviewContentContainer>
      <div id="preview-text-container">
        <h2 className="movie-title">{title || name}</h2>
        <p className="movie-release-date">({release_date?.slice(0, 4) || first_air_date?.slice(0, 4)})</p>
        <span className="movie-details">
          <div>
            <img src={TomatoImage} alt="Tomato" />
          </div>
          <small>{vote_average?.toFixed(1) * 10}%</small>
          <div className="genres-container">
            {(genre_ids || genres)?.slice(0, 4).map((item) => {
              const id = typeof item === "object" ? item.id : item;
              return (
                <p key={id} className="genre">
                  &#183; &nbsp;{generateGenre(id)}&nbsp;
                </p>
              );
            })}
          </div>
        </span>
        <p className="movie-overview">{overview}</p>
        <div className="button-container">
          {checkIfAddedToFavorites(id) ? (
            <CustomButton onClick={handleRemoveFromFavorites} buttonType={BUTTON_TYPES_CLASSES.removeFavorites}>
              <AiOutlineMinus />
              Remove from favorites
            </CustomButton>
          ) : (
            <>
              {status === true ? (
                <>
                  <CustomButton onClick={handleRemoveFromFavorites} buttonType={BUTTON_TYPES_CLASSES.removeFavorites}>
                    <AiOutlineMinus />
                    Remove from favorites
                  </CustomButton>
                  {showSuccessAlert && (
                    <p className={showSuccessAlert === "Removed from favorites" ? "success-alert-remove" : "success-alert-add"}>
                      <AiOutlineCheck /> <span>{showSuccessAlert}</span>
                    </p>
                  )}
                </>
              ) : (
                <CustomButton onClick={handleAddToFavorites} buttonType={BUTTON_TYPES_CLASSES.favorites}>
                  <AiOutlinePlus />
                  Add to favorites
                </CustomButton>
              )}
            </>
          )}
          <CustomButton onClick={handleWatchTrailer} buttonType={BUTTON_TYPES_CLASSES.play}>
            <CiPlay1 className="play-icon" />
            {viewTrailer ? "Close Trailer" : "Watch Trailer"}
          </CustomButton>
        </div>
      </div>
      <PreviewVideoPlayer trailer={trailer?.data?.results} viewTrailer={viewTrailer} />
    </PreviewContentContainer>
  );
};
