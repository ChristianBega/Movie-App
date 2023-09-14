import React from "react";
import { SkeletonRail } from "./loading-rail.style";

export const LoadingRail = () => {
  return (
    <SkeletonRail>
      <h1 className="rail-header">&nbsp;</h1>
      <div className="rail-container">&nbsp;</div>
    </SkeletonRail>
  );
};
