import Image from "next/image";
import RecipeCategories from "@/components/RecipeCategories";
import Head from "next/head";
import axios from "axios";
import RandomMeal from "@/components/RandomMeal";
import Hero from "@/components/Hero";
import MealsRecipes from "@/components/MealsRecipes";
import LatestRecipes from "@/components/LatestRecipes";
import SignIn from "@/components/SignIn";

export async function getStaticProps() {
  try {
    // fetch categories
    const response = await axios(
      "https://www.themealdb.com/api/json/v1/1/categories.php"
    );
    // fetch random meal
    const response2 = await axios(
      "https://www.themealdb.com/api/json/v1/1/random.php"
    );
    // fetch latest recipes
    const response3 = await axios(
      "https://www.themealdb.com/api/json/v1/1/search.php?f=a"
    );
    return {
      props: {
        categories: response.data.categories,
        randomMeal: response2.data.meals[0],
        latestRecipes: response3.data.meals,
      },
    };
  } catch (error) {
    console.error("can not fetch data", error);
    return { props: { categories: [] } };
  }
}

export default function Home({ categories, randomMeal, latestRecipes }) {
  return (
    <>
      <Head>
        <title>Tasty | Home</title>
      </Head>
      <SignIn />
      <Hero />
      <RecipeCategories categories={categories} />
      <RandomMeal randomMeal={randomMeal} />
      <LatestRecipes meals={latestRecipes} />
    </>
  );
}
