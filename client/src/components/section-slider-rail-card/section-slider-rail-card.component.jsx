import React, { useEffect, useRef } from "react";
import { StyledCardOverLay, StyledSliderRailCard } from "./section-slider-rail-card.styles";
import { useAnimation, useInView } from "framer-motion";
import { cardVariants } from "../../animations/framer-motion-variants";
import TomatoImage from "../../../src/assets/tomato.png";
import { Link } from "react-router-dom";
const SectionSliderRailCard = ({ movie }) => {
  // console.log(movie);
  const Card = () => {
    const { vote_average, title, poster_path } = movie;
    const ref = useRef();
    const controls = useAnimation();
    const inView = useInView(ref);
    useEffect(() => {
      if (inView) {
        controls.start("visible");
      } else {
        controls.start("hidden");
      }
    }, [controls, inView]);

    return (
      <StyledSliderRailCard
        ref={ref}
        variants={cardVariants}
        initial="hidden"
        animate={controls}
        className="card"
        image={`https://image.tmdb.org/t/p/original/${poster_path}`}
        title={title}
        rating={vote_average}
      >
        <StyledCardOverLay>
          <Link to="/preview" state={{ movie: movie }}>
            <div className="text-container">
              <h3>{title}</h3>
              <span>
                <img src={TomatoImage} width="25px" height="25px"></img>
                <small>{vote_average * 10}%</small>
              </span>
            </div>
          </Link>
        </StyledCardOverLay>
      </StyledSliderRailCard>
    );
  };

  return <Card />;
};
export default SectionSliderRailCard;
