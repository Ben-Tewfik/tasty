import Image from "next/image";
import RecipeCategories from "@/components/RecipeCategories";
import Head from "next/head";
import axios from "axios";

export async function getStaticProps() {
  try {
    const response = await axios(
      "https://www.themealdb.com/api/json/v1/1/categories.php"
    );

    return { props: { categories: response.data.categories } };
  } catch (error) {
    console.error("can not fetch data", error);
    return { props: { categories: [] } };
  }
}

export default function Home({ categories }) {
  return (
    <>
      <Head>
        <title>Tasty | Home</title>
      </Head>

      <RecipeCategories categories={categories} />
    </>
  );
}
