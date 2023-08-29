import { initializeApp } from "firebase/app";

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

// Import firebase firestore
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

// Web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID,
};

// Initializing firebase instance
const firebaseApp = initializeApp(firebaseConfig);

// Creating google auth object
export const auth = getAuth();

// Google Auth
// 1. creating provider instance
const googleProvider = new GoogleAuthProvider();
// 2. creating custom parameters
googleProvider.setCustomParameters({
  prompt: "select_account",
});

// Returns the existing default Firestore instance that is associated with the provided FirebaseApp
export const db = getFirestore();

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

  // snapshot - an specific instance of a user object with additional information
  const userSnapshot = await getDoc(userDocRef);

  // if a user doesn't exist then create it
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation,
      });
    } catch (error) {
      console.log("error creating the user", error.message);
    }
  }
  return userDocRef;
};
