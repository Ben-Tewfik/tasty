import MealsFilteredByCategory from "@/components/MealsFilteredByCategory";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";

export async function getStaticPaths() {
  const {
    data: { categories },
  } = await axios("https://www.themealdb.com/api/json/v1/1/categories.php");
  const paths = categories.map(category => ({
    params: {
      category: category.strCategory,
    },
  }));
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const response =
    await axios(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${params.category}
`);
  const mealsByCategory = response.data.meals;
  return {
    props: {
      category: params.category,
      mealsByCategory,
    },
  };
}

export default function Category({ category, mealsByCategory }) {
  return (
    <MealsFilteredByCategory category={category} meals={mealsByCategory} />
  );
}
