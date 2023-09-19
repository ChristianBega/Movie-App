import React, { useContext, useEffect } from "react";
import { FavoritesContext } from "../../contexts/favorites.context";
import { UserContext } from "../../contexts/user.context";
import { useQueries } from "@tanstack/react-query";
import axios from "axios";
import { FavoritesCard } from "../../components/favorites-card/favorites-card.component";

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
        queryKey: [favoriteId],
        queryFn: () => fetchQuery(favoriteId.id),
      };
    }),
  });

  return (
    <>
      <section style={{ display: "flex", flexWrap: "wrap", flexDirection: "row", justifyContent: "center", maxWidth: "1400px", margin: "4rem auto" }}>
        {favoritesQueries.map((query, index) => {
          if (query.isLoading) {
            return <p key={index}>Loading...</p>;
          } else if (query.isError) {
            return <p key={index}>Error: {query.error.message}</p>;
          } else {
            return <FavoritesCard key={index} movie={query.data} />;
          }
        })}
      </section>
    </>
  );
};
export default MyStuffPage;
