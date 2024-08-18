import { Loader } from "@/components/Loader";
import MealsRecipes from "@/components/MealsRecipes";
import SectionTitle from "@/components/SectionTitle";
import { useGlobalContext } from "@/contexts/RecipesContext";

export default function Meals() {
  const { recipes, loading } = useGlobalContext();
  if (loading) {
    return (
      <section className="w-full h-screen flex items-center justify-center">
        <Loader />
      </section>
    );
  }
  if (recipes.length < 1) {
    return (
      <section className="flex-1 text-center py-10">
        <h1 className="text-3xl mb-4">0 results found for your search.</h1>
        <p className="text-xl text-gray-500">Please try another search term</p>
      </section>
    );
  }
  return (
    <>
      <SectionTitle>Search Results</SectionTitle>
      <MealsRecipes meals={recipes} />;
    </>
  );
}
