import FavoriteMealCard from "@/components/FavoriteMealCard";
export default function FavoriteMealsRecipes({ meals }) {
  return (
    <section className="w-[90vw] mx-auto mb-10 max-w-[1170px] grid grid-cols-auto-fill gap-4">
      {meals?.map(filteredMeal => {
        return <FavoriteMealCard key={filteredMeal.id} {...filteredMeal} />;
      })}
    </section>
  );
}
