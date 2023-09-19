import React from "react";
import { SkeletonFavoriteCard } from "./loading-favorite-card.styles";

export const LoadingFavoriteCard = () => {
  return (
    <SkeletonFavoriteCard>
      &nbsp;
      <p>Unable to fetch currently :{`(`}</p>
      <p>Please try again later</p>
    </SkeletonFavoriteCard>
  );
};
