import { useDebounce } from "@/hooks/hooks";
import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "@/utils/firebase-config";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
const GlobalContext = createContext();

export default function RecipesContext({ children }) {
  const [openSignIn, setOpenSignIn] = useState(false);
  const [openSignUp, setOpenSignUp] = useState(false);
  const [openForgetPassword, setOpenForgetPassword] = useState(false);
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);

  //  sign up function
  function signUp(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
  }
  // sign in function
  function signIn(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }
  // logout function
  function logout() {
    return signOut(auth);
  }
  // reset password
  function resetPassword(email) {
    return sendPasswordResetEmail(auth, email);
  }
  // user state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, user => {
      setCurrentUser(user);
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  return (
    <GlobalContext.Provider
      value={{
        openSignIn,
        setOpenSignIn,
        openSignUp,
        setOpenSignUp,
        openForgetPassword,
        setOpenForgetPassword,
        signUp,
        signIn,
        currentUser,
        logout,
        resetPassword,
        loading,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
export const useGlobalContext = () => useContext(GlobalContext);
