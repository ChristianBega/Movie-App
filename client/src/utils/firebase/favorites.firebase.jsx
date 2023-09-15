// Import firebase from index
import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import { auth, db } from "./index.firebase";

export const createFavoriteDocumentIfAuthenticated = async (movieId, userUid) => {
  try {
    const favoritesRef = doc(db, "favorites", userUid);
    const docSnapshot = await getDoc(favoritesRef);
    // Check if the document exists
    if (docSnapshot.exists()) {
      // If the document already exists, update it with the new movie ID
      const data = docSnapshot.data();
      const moviesArray = data?.movies || [];
      // Check if the movieId is already in the array to prevent duplicates
      if (!moviesArray.includes(movieId)) {
        moviesArray.push(movieId);
        await updateDoc(favoritesRef, {
          movies: moviesArray,
        });
        console.log("Movie ID added to the existing document.");
      } else {
        console.log("Movie ID already exists in the document.");
      }
    } else {
      // If the document does not exist, create a new one with the movie ID
      await setDoc(favoritesRef, {
        movies: [movieId],
      });
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
