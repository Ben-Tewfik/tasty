import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

const GlobalContext = createContext();

export default function RecipesContext({ children }) {
  return (
    <GlobalContext.Provider value={"hello"}>{children}</GlobalContext.Provider>
  );
}
export const useGlobalContext = () => useContext(GlobalContext);
