import { createContext, useContext } from "react";

const GlobalContext = createContext();
export default function RecipesContext({ children }) {
  return (
    <GlobalContext.Provider value={"hello"}>{children}</GlobalContext.Provider>
  );
}
export const useGlobalContext = () => useContext(GlobalContext);
