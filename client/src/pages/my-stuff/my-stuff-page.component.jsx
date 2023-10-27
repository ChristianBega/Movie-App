import React, { useContext, useEffect } from "react";
import { FavoritesContext } from "../../setup/contexts/favorites.context";
import { UserContext } from "../../setup/contexts/user.context";
import { useQueries } from "@tanstack/react-query";
import axios from "axios";
import { FavoritesCard } from "./components/favorites-card/favorites-card.component";
import { query } from "firebase/firestore";

const MyStuffPage = () => {
  const { currentFavorites, fetchFavorites } = useContext(FavoritesContext);
  const { currentUser } = useContext(UserContext);

  useEffect(() => {
    fetchFavorites(currentUser.uid);
  }, [currentUser.uid]);

  const fetchQuery = async (id, mediaType) => {
    const options = {
      headers: {
        accept: "application/json",
        Authorization: import.meta.env.VITE_AUTHORIZATION,
      },
    };
    try {
      if (mediaType === "movie") {
        const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}`, options);
        return response.data;
      } else if (mediaType === "tv") {
        const response = await axios.get(`https://api.themoviedb.org/3/tv/${id}`, options);
        return response.data;
      }
    } catch (error) {
      throw new Error("Network response was not ok");
    }
  };

  const favoritesQueries = useQueries({
    queries:
      currentFavorites && currentFavorites.length > 0
        ? currentFavorites.map((favoriteId) => {
            return {
              queryKey: [favoriteId],
              queryFn: () => fetchQuery(favoriteId.id, favoriteId.mediaType),
            };
          })
        : [],
  });

  console.log(currentFavorites);
  return (
    <>
      <section
        style={{
          display: "flex",
          flexWrap: "wrap",
          flexDirection: "row",
          justifyContent: "center",
          maxWidth: "1400px",
          margin: "4rem auto",
          gap: "2rem 1rem",
          width: "100%;",
          overflow: "hidden",
          padding: ".3rem",
        }}
      >
        {favoritesQueries.length === 0 ? (
          <p>No favorites added yet</p>
        ) : (
          favoritesQueries.map((query, index) => {
            if (query.isLoading) {
              return <p key={index}>Loading...</p>;
            } else if (query.isError) {
              return <p key={index}>Error: {query.error.message}</p>;
            } else {
              return <FavoritesCard key={index} movie={query.data} error={query.isError} />;
            }
          })
        )}
      </section>
    </>
  );
};
export default MyStuffPage;
