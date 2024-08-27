import Image from "next/image";
import RecipeCategories from "@/components/RecipeCategories";
import Head from "next/head";
import axios from "axios";
import RandomMeal from "@/components/RandomMeal";
import Hero from "@/components/Hero";

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
    return {
      props: {
        categories: response.data.categories,
        randomMeal: response2.data.meals[0],
      },
    };
  } catch (error) {
    console.error("can not fetch data", error);
    return { props: { categories: [] } };
  }
}

export default function Home({ categories, randomMeal }) {
  return (
    <>
      <Head>
        <title>Tasty | Home</title>
      </Head>
      <Hero />
      <RecipeCategories categories={categories} />
      <RandomMeal randomMeal={randomMeal} />
    </>
  );
}
