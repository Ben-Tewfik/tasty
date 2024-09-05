import { useDebounce } from "@/hooks/hooks";
import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

const GlobalContext = createContext();

export default function RecipesContext({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <GlobalContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </GlobalContext.Provider>
  );
}
export const useGlobalContext = () => useContext(GlobalContext);
