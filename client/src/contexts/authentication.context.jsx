import { createContext, useState, useEffect } from "react";
import { auth } from "../utils/firebase/index.firebase";

// Creating UserContext which represents the actual value you want to access === CONTEXT
export const AuthContext = createContext({
  isAuthorized: false,
});

export const AuthProvider = ({ children }) => {
  const [isAuthorized, setIsAuthorized] = useState(false);

  const authStateListener = () => {
    auth.onAuthStateChanged(async (user) => {
      if (!user) {
        return setIsAuthorized(false);
      }
      return setIsAuthorized(true);
    });
  };
  useEffect(() => {
    authStateListener();
  }, [authStateListener]);

  const value = { isAuthorized };
  // UseEffect is called on mount
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
