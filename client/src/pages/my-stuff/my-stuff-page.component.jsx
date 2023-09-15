import React, { useContext, useEffect } from "react";
import { FavoritesContext } from "../../contexts/favorites.context";
import { UserContext } from "../../contexts/user.context";
import { useQueries } from "@tanstack/react-query";
import axios from "axios";

const MyStuffPage = () => {
  const { currentFavorites, fetchFavorites } = useContext(FavoritesContext);
  const { currentUser } = useContext(UserContext);

  useEffect(() => {
    fetchFavorites(currentUser.uid);
  }, []);

  const fetchQuery = async (id) => {
    const options = {
      headers: {
        accept: "application/json",
        Authorization: import.meta.env.VITE_AUTHORIZATION,
      },
    };
    try {
      const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}`, options);
      return response.data;
    } catch (error) {
      throw new Error("Network response was not ok");
    }
  };

  const favoritesQueries = useQueries({
    queries: currentFavorites.map((favoriteId) => {
      return {
        queryKey: favoriteId,
        queryFn: () => fetchQuery(favoriteId),
      };
    }),
  });

  return (
    <>
      <h1>My Stuff</h1>
      <h1>Movies</h1>
      {favoritesQueries.map((query, index) => {
        if (query.data) {
          const { title, overview, air_date, season_number, backdrop_path, budget, vote_average, genres } = query.data;
          return (
            <div style={{ border: "1px solid red", marginBlock: "2rem", maxWidth: "250px" }} key={index}>
              <p>{title}</p>
              <p>{overview}</p>
              <p>{vote_average * 10}%</p>
            </div>
          );
        }
        return "Loading... Line 56";
      })}
      <h1>Tv Shows</h1>
    </>
  );
};
export default MyStuffPage;
