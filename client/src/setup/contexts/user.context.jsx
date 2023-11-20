// Import createContext
import { createContext, useState, useEffect } from "react";
import { createUserDocumentFromAuth, onAuthStateChangedListener } from "../utils/firebase/authentication.firebase";
import { getProfileAccountDocument } from "../utils/firebase/accountProfiles.firebase";
// Import firebase utils

// Creating UserContext which represents the actual value you want to access === CONTEXT
export const UserContext = createContext({
  currentUser: null,
  currentProfileId: "",
  currentProfileAccount: [],
  setCurrentUser: () => null,
  setCurrentProfileId: () => null,
  setCurrentProfileAccount: () => null,
});

export const UserProvider = ({ children }) => {
  const [activeUser, setActiveUser] = useState(); // local storage value if any
  const [currentUser, setCurrentUser] = useState(null);

  const [currentProfileId, setCurrentProfileId] = useState(null);
  const [currentProfileAccounts, setCurrentProfileAccounts] = useState([]);
  const [currentProfileAccount, setCurrentProfileAccount] = useState([]);

  useEffect(() => {
    const getAllProfileAccounts = async () => {
      if (!currentUser?.uid) return;
      const unsubscribe = await getProfileAccountDocument(currentUser?.uid, setCurrentProfileAccounts);
      if (typeof unsubscribe === "function") {
        return () => {
          console.log("Unsubscribing...");
          unsubscribe();
        };
      }
      setCurrentProfileAccounts(unsubscribe);
    };
    getAllProfileAccounts();
  }, [currentUser?.uid, setCurrentProfileAccounts]);

  // Local storage to set profile ids when profile card is clicked
  useEffect(() => {
    if (currentProfileId) {
      localStorage.setItem("activeUser", currentProfileId);
    }
  }, [currentProfileId]);

  // local storage to get the profile id and set it to the active user
  useEffect(() => {
    const activeUserAccount = localStorage.getItem("activeUser");
    if (!activeUserAccount) {
      setActiveUser(null);
    } else {
      setActiveUser(activeUserAccount);
    }
  }, [currentProfileId]);

  useEffect(() => {
    if (!activeUser) {
      setCurrentProfileId(currentUser?.uid);
    }
  }, [currentUser?.uid, activeUser]);

  useEffect(() => {
    setCurrentProfileId(activeUser);
  }, [activeUser]);

  useEffect(() => {
    currentProfileAccounts.filter((profileAccount) => {
      if (profileAccount.profileId === currentProfileId) {
        setCurrentProfileAccount(profileAccount);
      }
    });
  }, [currentProfileId, currentProfileAccounts]);

  // UseEffect is called on mount
  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      setCurrentUser(user);
    });
    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    setCurrentUser,
    currentProfileAccounts,
    currentProfileId,
    setCurrentProfileId,
    currentProfileAccount,
    setCurrentProfileAccount,
  };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
