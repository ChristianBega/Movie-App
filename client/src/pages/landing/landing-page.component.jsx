import React from "react";

import { LandingHero } from "../../components/landing-hero/landing-hero.component";
import { LandingContent } from "../../components/landing-content/landing-content.component";
import { LandingContentSection } from "./landing-page.styles";

import image3 from "../../assets/pexels-jeshootscom-1040158.jpg";
import image6 from "../../assets/pexels-ron-lach-9807277.jpg";
import image7 from "../../assets/pexels-lucas-pezeta-2398354.jpg";
import image11 from "../../assets/pngwing.com3.png";
import image12 from "../../assets/pngwing.com4.png";

import image15 from "../../assets/pngwing.com7.png";

const MOCK_DATA = [
  {
    title: "Explore a World of Variety",
    text: "Whether you're a fan of heart-pounding action, laugh-out-loud comedies, spine-tingling thrillers, or heartwarming dramas, Nextflix has it all.",
    imageUrl: image6,
    alt: "Change later...",
    backgroundImage: {
      backgroundUrl: image12,
      styling: {
        left: "-100",
        top: "-180",
        bottom: "200",
        height: "600",
        width: "600",
        rotate: "0deg",
      },
    },
  },
  {
    title: "View Ratings & Watch Trailers",
    text: "Don't waste another minute on a movie or show that doesn't tick all the right boxes. Get access to ratings and reviews from fellow critics and watch trailers to get a sneak peek into the world of your chosen title.",
    imageUrl: image7,
    alt: "Change later...",
    backgroundImage: {
      backgroundUrl: image11,
      styling: {
        top: "-150",
        right: "-50",
        bottom: "0",
        height: "400",
        width: "400",
        rotate: "-15deg",
      },
    },
  },
  {
    title: "Personalized Watch List",
    text: "Create your own personalized lists. And keep the excitement alive by receiving suggestions based on your preferences. A tailored entertainment hub for you, offering the best of your favorites and exciting new discoveries in one place.",
    imageUrl: image3,
    alt: "Change later...",
    backgroundImage: {
      backgroundUrl: image15,
      styling: {
        left: "-10",
        top: "-155",
        bottom: "200",
        height: "600",
        width: "600",
        rotate: "10deg",
      },
    },
  },
];
const LandingPage = () => {
  return (
    <>
      <section id="landing-hero-section">
        <LandingHero />
      </section>
      <LandingContentSection id="landing-content-section">
        {MOCK_DATA.map((content, index) => {
          return <LandingContent key={index} index={index + 1} content={content} />;
        })}
      </LandingContentSection>
    </>
  );
};

export default LandingPage;
