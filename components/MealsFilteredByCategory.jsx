import SectionTitle from "./SectionTitle";
import MealCard from "./MealCard";

export default function MealsFilteredByCategory({ category, meals }) {
  return (
    <section>
      <SectionTitle>{category} meals</SectionTitle>
      <div className="w-[90vw] mx-auto max-w-[1170px] grid grid-cols-auto-fill gap-4">
        {meals?.map(filteredMeal => {
          return <MealCard key={filteredMeal.id} {...filteredMeal} />;
        })}
      </div>
    </section>
  );
}
