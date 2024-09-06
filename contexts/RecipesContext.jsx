import { useDebounce } from "@/hooks/hooks";
import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

const GlobalContext = createContext();

export default function RecipesContext({ children }) {
  const [openSignIn, setOpenSignIn] = useState(false);
  const [openSignUp, setOpenSignUp] = useState(false);
  return (
    <GlobalContext.Provider
      value={{ openSignIn, setOpenSignIn, openSignUp, setOpenSignUp }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
export const useGlobalContext = () => useContext(GlobalContext);
