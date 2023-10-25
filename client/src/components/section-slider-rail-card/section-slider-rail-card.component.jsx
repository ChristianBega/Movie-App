import React, { useEffect, useRef } from "react";
import { StyledCardOverLay, StyledSliderRailCard } from "./section-slider-rail-card.styles";
import { useAnimation, useInView } from "framer-motion";
import { cardVariants } from "../../setup/animations/framer-motion-variants";
import TomatoImage from "../../../src/assets/tomato.png";
import { Link, useLocation } from "react-router-dom";
import { generateGenre } from "../../setup/utils/generateGenre";
const SectionSliderRailCard = ({ movie, mediaType }) => {
  const location = useLocation();
  const Card = () => {
    const { vote_average, title, poster_path, name, genre_ids } = movie;
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
          <Link to="/preview" state={{ movie: movie, mediaType: mediaType, previousPath: location.pathname }}>
            <div className="text-container">
              <h3>{title || name}</h3>
              <ul>
                {genre_ids.slice(0, 4).map((genreId, index) => {
                  return (
                    <li key={index} className="genre">
                      {generateGenre(genreId)}
                    </li>
                  );
                })}
              </ul>
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
