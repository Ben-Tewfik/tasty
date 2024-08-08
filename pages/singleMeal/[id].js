import Meal from "@/components/Meal";
import axios from "axios";
export async function getStaticPaths() {
  return {
    paths: [],
    fallback: "blocking",
  };
}

export async function getStaticProps({ params }) {
  const response = await axios(
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.id}`
  );
  if (!response.data.meals) {
    return {
      notFound: true,
    };
  }
  return {
    props: { meal: response.data.meals[0] },
  };
}

export default function SingleMeal({ meal }) {
  return <Meal meal={meal} />;
}
