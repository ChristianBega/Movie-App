import CreateProfileImg from "../../../assets/plus-cross-svgrepo-com.svg";
import ProfileImg1 from "../../../assets/profile-avatars/avatars_1.webp";

// Import firebase firestore
import { doc, getDoc, setDoc } from "firebase/firestore";
// Import firebase from index
import { auth, db } from "./index.firebase";
// Import firebase Auth
import {
  signInWithPopup,
  getAuth,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

// Google Auth
// 1. creating provider instance
const googleProvider = new GoogleAuthProvider();
// 2. creating custom parameters
googleProvider.setCustomParameters({
  prompt: "select_account",
});

//* Creating async function to handle creating a user from email and password
export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password);
};

//* Creating async function to handle creating a user document for firebase
export const createUserDocumentFromAuth = async (userAuth, additionalInformation = {}) => {
  // If no user then exit
  if (!userAuth) return;

  // userDocRef - an instance of user from googleAuth
  const userDocRef = doc(db, "users", userAuth.uid);

  try {
    // snapshot - an specific instance of a user object with additional information
    const userSnapshot = await getDoc(userDocRef);
    // if a user doesn't exist then create it
    if (!userSnapshot.exists()) {
      const { email } = userAuth;

      const createdAt = new Date();
      const profileAccounts = [
        {
          profileImg: CreateProfileImg,
          profileName: "Create an account",
          colors: ["rgba(255, 255, 0, 0.3)", "rgba(255, 102, 0, 0.3)"],
        },
        {
          profileImg: ProfileImg1,
          profileName: additionalInformation?.username,
          colors: [" rgba(11, 86, 148, 1)", "rgba(36, 89, 127, 1)"],
        },
      ];

      await setDoc(userDocRef, {
        email,
        createdAt,
        profileAccounts,
        ...additionalInformation,
      });
    }
  } catch (error) {
    console.error(error);
  }

  return userDocRef;
};

// Creating async function to handle signing in user with email and password
export const signInAuthWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await signInWithEmailAndPassword(auth, email, password);
};

// Creating async function using firebase signOut to log out user
export const signOutUser = async () => {
  auth.signOut();
};

// Creating function to listen for when auth changes and handles callback
export const onAuthStateChangedListener = (callback) => onAuthStateChanged(auth, callback);
