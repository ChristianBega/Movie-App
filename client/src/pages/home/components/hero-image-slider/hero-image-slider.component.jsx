import React, { useContext, useEffect, useState } from "react";
import { HeroImageSliderContainer, SliderBarPagination, SliderBarsContainer } from "./hero-image-slider.styles";
import { AiOutlineCheck, AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
// import { generateGenre } from "../../utils/generateGenre";
import { generateGenre } from "../../../../setup/utils/generateGenre";

import TomatoImage from "../../../../assets/tomato.png";
import CustomButton, { BUTTON_TYPES_CLASSES } from "../../../../components/button/button.component";
import { Link, useLocation } from "react-router-dom";
import { createFavoriteDocumentIfAuthenticated, deleteFavoriteDocumentIfAuthenticated } from "../../../../setup/utils/firebase/favorites.firebase";
import { UserContext } from "../../../../setup/contexts/user.context";
import { FavoritesContext } from "../../../../setup/contexts/favorites.context";
import { useMediaQuery } from "react-responsive";
import { device } from "../../../../device-breakpoints.styles";

const HeroImageSlider = ({ topRated, mediaType }) => {
  // Tracking current index, starts at 0, used to determine which slide we are on.
  const [currentIndex, setCurrentIndex] = useState(0);
  const [status, setStatus] = useState(null);
  const [showSuccessAlert, setShowSuccessAlert] = useState(null);

  const { activeUser } = useContext(UserContext);
  const { fetchFavorites, currentFavorites } = useContext(FavoritesContext);

  const isLaptopOrLarger = useMediaQuery({
    query: device.laptop,
  });
  const location = useLocation();

  // Destructuring each topRated object at the current index.
  const { backdrop_path, title, genre_ids, vote_average, id } = topRated[currentIndex];
  // goToSlide - takes currentIndex and goes to that slide
  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  const checkIfAddedToFavorites = (itemId) => {
    if (!itemId) return;
    if (!currentFavorites) return;
    return !!currentFavorites.find((item) => item.id === itemId);
  };

  const handleAddToFavorites = async () => {
    console.log("test");
    try {
      await createFavoriteDocumentIfAuthenticated(id, "movie", activeUser);
      setStatus(true);
      // setShowSuccessAlert(true);
      setShowSuccessAlert("Added to favorites");
      setTimeout(() => {
        setShowSuccessAlert(false);
      }, 3000);
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

  useEffect(() => {
    fetchFavorites();
  }, []);

  useEffect(() => {
    setStatus(null);
  }, [topRated[currentIndex]]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex === topRated.length - 1 ? 0 : prevIndex + 1));
    }, 8000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <>
      <HeroImageSliderContainer moviebackdrop={`https://image.tmdb.org/t/p/original/${backdrop_path}`}>
        <section className="hero-section-container">
          <div className="text-container">
            <h1 className="hero-title">{title}</h1>
            <span className="movie-details">
              <div>
                <img src={TomatoImage} />
              </div>
              <small>{vote_average?.toFixed(1) * 10}%</small>
              {genre_ids?.slice(0, 3).map((id) => {
                return <p key={id}>&nbsp; &#183; &nbsp;{generateGenre(id)}&nbsp;</p>;
              })}
            </span>
            <div className="button-container">
              <>
                {checkIfAddedToFavorites(id) ? (
                  <CustomButton onClick={handleRemoveFromFavorites} buttonType={BUTTON_TYPES_CLASSES.removeFavorites}>
                    <AiOutlineMinus />
                  </CustomButton>
                ) : (
                  <>
                    {status === true ? (
                      <>
                        <CustomButton onClick={handleRemoveFromFavorites} buttonType={BUTTON_TYPES_CLASSES.removeFavorites}>
                          <AiOutlineMinus />
                        </CustomButton>
                        {showSuccessAlert && (
                          <p className={showSuccessAlert === "Removed from favorites" ? "success-alert-remove" : "success-alert-add"}>
                            {isLaptopOrLarger && <span>{showSuccessAlert}</span>} <AiOutlineCheck />
                          </p>
                        )}
                      </>
                    ) : (
                      <CustomButton onClick={handleAddToFavorites} buttonType={BUTTON_TYPES_CLASSES.favorites}>
                        <AiOutlinePlus />
                      </CustomButton>
                    )}
                  </>
                )}
              </>
              <CustomButton buttonType={BUTTON_TYPES_CLASSES.favoritesSm}>
                <Link to="/preview" state={{ movie: topRated[currentIndex], mediaType: mediaType, previousPath: location.pathname }}>
                  More info
                </Link>
              </CustomButton>
            </div>
          </div>
          <SliderBarsContainer>
            {topRated.map((movies, index) => (
              <SliderBarPagination activestate={currentIndex === index ? "true" : "false"} key={index} onClick={() => goToSlide(index)}>
                <span></span>
                <small>{index + 1}</small>
              </SliderBarPagination>
            ))}
          </SliderBarsContainer>
        </section>
      </HeroImageSliderContainer>
    </>
  );
};

export default HeroImageSlider;
