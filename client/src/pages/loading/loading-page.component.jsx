import React from "react";
import { StyledLoadingScreenWrapper } from "./loading-page.styles";

const LoadingScreen = () => {
  return (
    <StyledLoadingScreenWrapper>
      <div class="lds-roller">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <h1>Loading</h1>
    </StyledLoadingScreenWrapper>
  );
};

export default LoadingScreen;
