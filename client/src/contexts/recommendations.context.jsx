import { createContext, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { convertMovieGenreId, convertTvGenreId } from "../utils/convertGenreId";
// Creating UserContext which represents the actual value you want to access === CONTEXT
export const RecommendationContext = createContext({
  previousPath: "",
  count: 0,
  currentSectionData: {},
  location: {},
  setCount: () => {},
});

const staticMovieAndShowsSectionData = [
  {
    sectionName: "Movies you may also like",
    fetchUrl:
      "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=",
    mediaType: "movie",
  },

  {
    sectionName: "Tv Shows you may also like",
    fetchUrl:
      "https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=",
    mediaType: "tv",
  },
];

export const RecommendationProvider = ({ children }) => {
  const location = useLocation();
  const [previousPath, setPreviousPath] = useState();
  const [count, setCount] = useState(0);

  const [currentSectionData, setCurrentSectionData] = useState([]);
  const [currentMovieGenres, setCurrentMovieGenres] = useState([]);
  const [currentTvShowGenres, setCurrentTvShowGenres] = useState([]);

  useEffect(() => {
    setPreviousPath(location?.state?.previousPath);
  }, []);

  useEffect(() => {
    if (location?.state?.movie?.genre_ids) {
      setCurrentMovieGenres(convertMovieGenreId(location?.state?.movie?.genre_ids));
      setCurrentTvShowGenres(convertTvGenreId(location?.state?.movie?.genre_ids));
      setCount((prevCount) => prevCount + 1);
    }
  }, [location?.state?.movie?.genre_ids]);

  useEffect(() => {
    const updatedStaticMovieAndShowsSectionData = staticMovieAndShowsSectionData.map((item, index) => {
      if (index === 0) {
        return {
          ...item,
          fetchUrl: `${item.fetchUrl}${currentMovieGenres?.filter(Boolean).join("%2C")}`,
        };
      } else if (index === 1) {
        return {
          ...item,
          fetchUrl: `${item.fetchUrl}${currentTvShowGenres?.filter(Boolean).join("%2C")}`,
        };
      }
      return item;
    });
    setCurrentSectionData(updatedStaticMovieAndShowsSectionData);
  }, [currentMovieGenres, currentTvShowGenres]);

  const value = { previousPath, count, currentSectionData, location, setCount };
  return <RecommendationContext.Provider value={value}>{children}</RecommendationContext.Provider>;
};
