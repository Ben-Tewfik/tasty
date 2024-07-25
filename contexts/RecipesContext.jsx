import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

const GlobalContext = createContext();

export default function RecipesContext({ children }) {
  const [recipeCategories, setRecipeCategories] = useState([]);
  // fetch recipe categories
  useEffect(() => {
    const fetchCategories = async () => {
      const response = await axios(
        "https://www.themealdb.com/api/json/v1/1/categories.php"
      );
      setRecipeCategories(response.data.categories);
    };
    fetchCategories();
  }, []);
  return (
    <GlobalContext.Provider value={{ recipeCategories }}>
      {children}
    </GlobalContext.Provider>
  );
}
export const useGlobalContext = () => useContext(GlobalContext);
