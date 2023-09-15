import { createContext, useContext, useEffect, useState } from "react";
import { getFavoriteDocument } from "../utils/firebase/favorites.firebase";
import { auth } from "../utils/firebase/index.firebase";

import { UserContext } from "./user.context";
export const FavoritesContext = createContext({
  currentFavorites: [],
  fetchFavorites: () => {},
});

export const FavoritesProvider = ({ children }) => {
  const [currentFavorites, setCurrentFavorites] = useState([]);
  const { currentUser } = useContext(UserContext);

  const fetchFavorites = async () => {
    const favorites = await getFavoriteDocument(currentUser?.uid);
    setCurrentFavorites(favorites);
  };

  const value = { currentFavorites, fetchFavorites };
  return <FavoritesContext.Provider value={value}>{children}</FavoritesContext.Provider>;
};
