import axios from "axios";
import { createContext, useState, useEffect } from "react";

const options = {
  headers: {
    accept: "application/json",
    Authorization: import.meta.env.VITE_AUTHORIZATION,
  },
};

export const GenresContext = createContext({ generateUrl: () => {}, fetchedData: {} });

export const GenresProvider = ({ children }) => {
  const [fetchUrl, setFetchUrl] = useState();
  const [fetchedData, setFetchedData] = useState();

  const generateUrl = (urlPath, genre_id) => {
    setFetchUrl("");
    if (!genre_id) {
      setFetchUrl(urlPath);
    } else {
      setFetchUrl(urlPath + genre_id);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(fetchUrl, options);
        setFetchedData(response);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [fetchUrl]);

  const value = { generateUrl, fetchedData };
  // UseEffect is called on mount
  return <GenresContext.Provider value={value}>{children}</GenresContext.Provider>;
};
