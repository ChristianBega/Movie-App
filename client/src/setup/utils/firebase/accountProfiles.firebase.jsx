// Import firebase from index
import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import { db } from "./index.firebase";

export const createProfileAccountDocumentIfAuthenticated = async (userUid) => {
  if (!userUid) return;
  try {
    const profileAccounts = doc(db, "users", userUid);
    const profileAccountsSnapshot = await getDoc(profileAccounts);
    console.log(profileAccountsSnapshot);

    if (profileAccountsSnapshot.exists()) {
      const data = profileAccountsSnapshot.data();
      const currentProfileAccounts = data || [];
      console.log(currentProfileAccounts);

      



      // const updatedFavoritesArray = favoritesArray.filter((movie) => movie.id !== movieId);

      // await updateDoc(favoritesRef, {
      //   movies: updatedFavoritesArray,
      // });
    }
  } catch (error) {
    console.error("Error deleting favorite movie:", error);
  }
};
