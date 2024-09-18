import ForgetPassword from "@/components/ForgetPassword";
import MealsRecipes from "@/components/MealsRecipes";
import SectionTitle from "@/components/SectionTitle";
import SignIn from "@/components/SignIn";
import { SignUp } from "@/components/SignUp";
import axios from "axios";

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
    <>
      <SectionTitle>{category} Meals</SectionTitle>
      <MealsRecipes meals={mealsByCategory} />
      <SignIn />
      <SignUp />
      <ForgetPassword />
    </>
  );
}
