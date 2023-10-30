// Import firebase from index
import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import { db } from "./index.firebase";
import profileImg2 from "../../../assets/profile-avatars/avatars_4.webp";

export const getProfileAccountDocument = async (userUid) => {
  if (!userUid) return;
  try {
    const profileAccounts = doc(db, "users", userUid);
    const profileAccountsSnapshot = await getDoc(profileAccounts);

    if (profileAccountsSnapshot.exists()) {
      const data = profileAccountsSnapshot.data();
      return data.profileAccounts;
    } else {
      console.log("User account documents do not exist.");
      return null; // You can return null or an empty object as appropriate
    }
  } catch (error) {
    console.error("Error deleting favorite movie:", error);
  }
};

export const createProfileAccountDocumentIfAuthenticated = async (userUid, profile, colors) => {
  if (!userUid) return;
  try {
    const profileAccountsRef = doc(db, "users", userUid);
    const profileAccountsSnapshot = await getDoc(profileAccountsRef);

    if (profileAccountsSnapshot.exists()) {
      const data = profileAccountsSnapshot.data();
      const currentProfileAccounts = data.profileAccounts || [];
      const newProfile = {
        profileName: profile,
        colors: [colors],
        profileImg: profileImg2,
      };
      currentProfileAccounts.push(newProfile);
      await updateDoc(profileAccountsRef, {
        profileAccounts: currentProfileAccounts,
      });
    }
  } catch (error) {
    console.error("Error deleting favorite movie:", error);
  }
};
