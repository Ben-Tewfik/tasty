import MealsRecipes from "@/components/MealsRecipes";
import SectionTitle from "@/components/SectionTitle";
import { useGlobalContext } from "@/contexts/RecipesContext";

export default function Meals() {
  const { recipes } = useGlobalContext();
  return (
    <>
      <SectionTitle>Search Results</SectionTitle>
      <MealsRecipes meals={recipes} />;
    </>
  );
}
