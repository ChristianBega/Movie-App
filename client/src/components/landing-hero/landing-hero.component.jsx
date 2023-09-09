import React from "react";
import { LandingHeroContainer } from "./landing-hero.styles";
import CustomButton from "../button/button.component";
import { Link } from "react-router-dom";

export const LandingHero = () => {
  return (
    <LandingHeroContainer>
      <div className="hero-text-container">
        <h1>
          <span>NextFlix:</span> Your Ultimate Movie Hub
        </h1>
        <p>
          Tired of endless scrolling on streaming platforms? Say goodbye to the hunt for the perfect movie or TV show. NextFlix brings your next
          cinematic adventure to your fingertips.
        </p>

        <p>
          Your <small>NextFlix</small> is just one click away
        </p>
        <CustomButton>
          <Link to="/authenticate-user" state={{ linkType: "sign-up" }}>
            Sign Up Today!
          </Link>
        </CustomButton>
      </div>
    </LandingHeroContainer>
  );
};
