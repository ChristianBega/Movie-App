// Import firebase from index
import { doc, getDoc, onSnapshot, updateDoc } from "firebase/firestore";
import { db } from "./index.firebase";
import profileImg2 from "../../../assets/profile-avatars/avatars_4.webp";
// import uuid from "uuid";
import { v4 as uuidv4 } from "uuid";
export const getProfileAccountDocument = async (userUid, onUpdate) => {
  if (!userUid) return;
  try {
    const profileAccountsRef = doc(db, "users", userUid);

    const unsubscribe = onSnapshot(profileAccountsRef, (profileAccountsSnapshots) => {
      if (profileAccountsSnapshots.exists()) {
        const data = profileAccountsSnapshots.data();
        if (data.profileAccounts) {
          onUpdate(data.profileAccounts);
        } else {
          console.log("No profileAccounts found in the document.");
          onUpdate([]);
        }
      } else {
        console.log("User profile account documents do not exist.");
        onUpdate([]);
      }
    });
    return unsubscribe;
  } catch (error) {
    console.error("Error Adding Profile Account:", error);
    onUpdate([]);
    return () => {};
  }
};

export const createProfileAccountDocumentIfAuthenticated = async (userUid, profile, colors, avatars) => {
  console.log(profile, colors, avatars);
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
        profileImg: avatars,
        profileId: uuidv4(),
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
