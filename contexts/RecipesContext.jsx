import { useDebounce } from "@/hooks/hooks";
import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

const GlobalContext = createContext();

export default function RecipesContext({ children }) {
  const [openSignIn, setOpenSignIn] = useState(false);
  return (
    <GlobalContext.Provider value={{ openSignIn, setOpenSignIn }}>
      {children}
    </GlobalContext.Provider>
  );
}
export const useGlobalContext = () => useContext(GlobalContext);
