import React, { useEffect, useState } from "react";
import { HeroImageSliderContainer, SliderBarPagination, SliderBarsContainer } from "./hero-image-slider.styles";
import { AiOutlinePlus } from "react-icons/ai";
import { generateGenre } from "../../utils/generateGenre";
import TomatoImage from "../../../src/assets/tomato.png";
import CustomButton, { BUTTON_TYPES_CLASSES } from "../../components/button/button.component";
import { Link } from "react-router-dom";

export const HeroImageSlider = ({ topRated }) => {
  console.log(topRated);
  // Tracking current index, starts at 0, used to determine which slide we are on.
  const [currentIndex, setCurrentIndex] = useState(0);

  // Destructuring each topRated object at the current index.
  const { backdrop_path, title, genre_ids, vote_average } = topRated[currentIndex];

  // goToSlide - takes currentIndex and goes to that slide
  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

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
              <small>{vote_average * 10}%</small>
              {genre_ids?.slice(0, 3).map((id) => {
                return <p key={id}>&nbsp; &#183; &nbsp;{generateGenre(id)}&nbsp;</p>;
              })}
            </span>
            <div className="button-container">
              <CustomButton buttonType={BUTTON_TYPES_CLASSES.favoritesSm}>
                <AiOutlinePlus />
              </CustomButton>
              <CustomButton buttonType={BUTTON_TYPES_CLASSES.favoritesSm}>
                <Link to="/preview" state={{ movie: topRated[currentIndex] }}>
                  See more
                </Link>
              </CustomButton>
            </div>
          </div>
          <SliderBarsContainer>
            {topRated.map((movies, index) => (
              <SliderBarPagination activeState={currentIndex === index && true} key={index} onClick={() => goToSlide(index)}>
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
