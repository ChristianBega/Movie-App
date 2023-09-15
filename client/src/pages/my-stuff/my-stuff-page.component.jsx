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
    console.log(id);
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
        queryFn: () => fetchQuery(favoriteId.id),
      };
    }),
  });

  return (
    <>
      {favoritesQueries.map((query, index) => {
        if (query.isLoading) {
          return <p key={index}>Loading...</p>;
        } else if (query.isError) {
          return <p key={index}>Error: {query.error.message}</p>;
        } else {
          const { title, overview, name, air_date, season_number, backdrop_path, budget, vote_average, genres } = query.data;
          return (
            <div key={index}>
              {/* Render your data here */}
              <div style={{ border: "1px solid red", margin: "2rem", maxWidth: "250px" }} key={index}>
                <p>{title || name}</p>
                {/* <p>{overview}</p>
                <p>{vote_average * 10}%</p> */}
              </div>
            </div>
          );
        }
      })}
    </>
  );
};
export default MyStuffPage;
