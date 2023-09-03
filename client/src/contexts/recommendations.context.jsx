import { createContext, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
// Creating UserContext which represents the actual value you want to access === CONTEXT
export const RecommendationContext = createContext({ currentSectionData: {}, setCurrentGenres: () => {}, setCurrentSectionData: () => {} });

const defaultSectionData = {
  sectionName: "You may also like",
  fetchUrl: `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&with_genres=`,
};
export const RecommendationProvider = ({ children }) => {
  const [currentSectionData, setCurrentSectionData] = useState();
  const location = useLocation();
  const [currentGenres, setCurrentGenres] = useState();

  useEffect(() => {
    setCurrentGenres(location.state?.movie?.genre_ids || []);
  }, [location]);

  useEffect(() => {
    const newFetchUrl = `${defaultSectionData.fetchUrl}${currentGenres?.join("%2C")}`;
    setCurrentSectionData({
      ...defaultSectionData,
      fetchUrl: newFetchUrl,
    });
  }, [currentGenres]);

  const value = { currentSectionData, setCurrentGenres, setCurrentSectionData };
  // UseEffect is called on mount
  return <RecommendationContext.Provider value={value}>{children}</RecommendationContext.Provider>;
};
