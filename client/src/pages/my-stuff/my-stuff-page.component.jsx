import React from "react";
import { LoadingRail } from "../../components/loading/loading-rail/loading-rail.component";

const MyStuffPage = () => {
  // Query firebase for currentUsers movies & tv show favorite lists
  return (
    <>
      <h1>My Stuff</h1>
      <p>Movies</p>
      <p>Tv Shows</p>
      <LoadingRail />
    </>
  );
};
export default MyStuffPage;
