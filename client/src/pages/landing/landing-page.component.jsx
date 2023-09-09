import React from "react";

import { LandingHero } from "../../components/landing-hero/landing-hero.component";
import { LandingContent } from "../../components/landing-content/landing-content.component";
import { LandingContentSection } from "./landing-page.styles";

const MOCK_DATA = [
  {
    title: "Explore a World of Variety",
    text: "Whether you're a fan of heart-pounding action, laugh-out-loud comedies, spine-tingling thrillers, or heartwarming dramas, Nextflix has it all.",
    imageUrl: "1",
  },
  {
    title: "View Ratings & Watch Trailers",
    text: "Don't waste another minute on a movie or show that doesn't tick all the right boxes. Get access to ratings and reviews from fellow critics and watch trailers to get a sneak peek into the world of your chosen title.",
    imageUrl: "1",
  },
  {
    title: "Personalized Watch List",
    text: "Create your own personalized lists. And keep the excitement alive by receiving suggestions based on your preferences. A tailored entertainment hub for you, offering the best of your favorites and exciting new discoveries in one place.",
    imageUrl: "1",
  },
];
export const LandingPage = () => {
  return (
    <>
      <section id="landing-hero-section">
        <LandingHero />
      </section>
      <LandingContentSection id="landing-content-section">
        {MOCK_DATA.map((content) => {
          return <LandingContent content={content} />;
        })}
      </LandingContentSection>
    </>
  );
};
