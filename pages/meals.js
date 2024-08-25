import MealsRecipes from "@/components/MealsRecipes";
import SectionTitle from "@/components/SectionTitle";
import axios from "axios";

export async function getServerSideProps(context) {
  const { search } = context.query;
  let recipes = [];
  if (search) {
    try {
      const response = await axios(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
      );
      recipes = response.data.meals || [];
    } catch (error) {
      console.error(error);
    }
  }
  return { props: { recipes, search: search || "" } };
}

export default function Meals({ search, recipes }) {
  if (recipes?.length < 1) {
    return (
      <section className="flex-1 text-center py-10">
        <h1 className="text-3xl mb-4">0 results found for your search.</h1>
        <p className="text-xl text-gray-500">Please try another search term</p>
      </section>
    );
  }

  return (
    <>
      <SectionTitle>Search Results For {search}</SectionTitle>
      <MealsRecipes meals={recipes} />;
    </>
  );
}
