import MealCard from "./MealCard";
import SectionTitle from "./SectionTitle";

export default function LatestRecipes({ meals }) {
  return (
    <section className="w-[90vw] mx-auto max-w-[1170px] mb-14">
      <SectionTitle>our latest recipes</SectionTitle>
      <div className="flex flex-col sm:grid grid-cols-3 gap-2">
        {meals.slice(0, 3).map(meal => {
          return <MealCard key={meal.idMeal} {...meal} />;
        })}
      </div>
    </section>
  );
}
