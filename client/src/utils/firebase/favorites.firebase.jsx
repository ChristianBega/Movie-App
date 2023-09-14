// Import firebase from index
import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import { auth, db } from "./index.firebase";

export const createFavoriteDocumentIfAuthenticated = async (movieId) => {
  try {
    // Check if user is authenticated
    if (!auth.currentUser) {
      console.log("User is not authenticated. Cannot create a favorite document.");
      return;
    }

    // Reference to the user's favorite document
    const favoritesRef = doc(db, "favorites", auth.currentUser.uid);

    // Check if the document exists
    const docSnapshot = await getDoc(favoritesRef);

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
