import { useEffect, useState } from "react";
import axios from "axios";

const useSearch = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [response, setResponse] = useState([]);

  const sendRequestToTMDBApi = async (userInput) => {
    if (userInput === "" || userInput.length <= 0) {
      alert("Please enter a movie or tv show!");
      return "No Results";
    }
    const options = {
      headers: {
        accept: "application/json",
        Authorization: import.meta.env.VITE_AUTHORIZATION,
      },
    };
    // const urlEndPoint = "https://api.themoviedb.org/3/search/multi";
    const urlEndPoint = `https://api.themoviedb.org/3/search/multi?include_adult=false&language=en-US&page=1&query=${encodeURIComponent(userInput)}`;
    // const urlEndPoint = `https://api.themoviedb.org/3/search/multi?include_adult=true&include_video=true&language=en-US&page=1&query=${encodeURIComponent(
    //   userInput
    // )}`;

    try {
      setLoading(true);
      const response = await axios.get(urlEndPoint, options);

      if (response.status === 200) {
        setStatus("success");
        setResponse(response.data.results[0]);
      } else {
        setStatus(`failed ${status}`);
        setResponse([]);
      }
      setLoading(false);
    } catch (error) {
      console.error("Error sending data to webhook:", error);
      setError(error);
      setStatus("failed");
      setLoading(false);
    }
  };
  return { loading, error, status, response, searchTerm, sendRequestToTMDBApi, setSearchTerm };
};
export default useSearch;
