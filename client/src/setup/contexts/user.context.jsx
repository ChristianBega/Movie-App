// Import createContext
import { createContext, useState, useEffect } from "react";
import { createUserDocumentFromAuth, onAuthStateChangedListener } from "../utils/firebase/authentication.firebase";
// Import firebase utils

// Creating UserContext which represents the actual value you want to access === CONTEXT
export const UserContext = createContext({
  // UserContext initial value will be null which shows there is no current user
  currentUser: null,
  setCurrentUser: () => null,
});

// User provider acts as the context component that wraps all children (components) that need to use context
export const UserProvider = ({ children }) => {
  // Current user state set to null
  const [currentUser, setCurrentUser] = useState(null);
  // Value is passed to the context component which allows children to access it.
  const value = {
    currentUser,
    setCurrentUser,
  };

  // UseEffect is called on mount
  useEffect(() => {
    // Creating variable to store the return object from the unsubscribe method
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      setCurrentUser(user);
    });
    return unsubscribe;
  }, []);
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
