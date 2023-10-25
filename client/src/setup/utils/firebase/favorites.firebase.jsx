// Import firebase from index
import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import { auth, db } from "./index.firebase";

export const createFavoriteDocumentIfAuthenticated = async (movieId, mediaType, userUid) => {
  try {
    const favoritesRef = doc(db, "favorites", userUid);
    const docSnapshot = await getDoc(favoritesRef);

    // Create the new movie object
    const newMovie = { id: movieId, mediaType: mediaType };

    if (docSnapshot.exists()) {
      const data = docSnapshot.data();
      const moviesArray = data?.movies || [];
      let movieExists = false;

      // Check if the movieId is already in the array to prevent duplicates
      moviesArray.forEach((movie) => {
        if (movie.id === movieId && movie.mediaType === mediaType) {
          movieExists = true;
        }
      });

      if (!movieExists) {
        moviesArray.push(newMovie);
        await updateDoc(favoritesRef, {
          movies: moviesArray,
        });
        console.log("Movie added to the existing document.");
      } else {
        console.log("Movie already exists in the document.");
      }
    } else {
      // If the document does not exist, create a new one with the movie object
      await setDoc(favoritesRef, {
        movies: [newMovie],
      });
      console.log("New document created with the movie.");
    }
  } catch (error) {
    console.error("Error updating/creating document: ", error);
  }
};

export const getFavoriteDocument = async (userId) => {
  try {
    const favoritesRef = doc(db, "favorites", userId);
    const docSnapshot = await getDoc(favoritesRef);
    if (docSnapshot.exists()) {
      const data = docSnapshot.data();
      return data.movies;
    } else {
      console.log("Favorites document does not exist.");
      return null; // You can return null or an empty object as appropriate
    }
  } catch (error) {
    console.error("Error fetching favorites document: ", error);
    throw error; // Re-throw the error to handle it in the calling code
  }
};
