import FavoriteMealCard from "@/components/FavoriteMealCard";
import { motion } from "framer-motion";
import Link from "next/link";
export default function FavoriteMealsRecipes({ meals }) {
  if (meals.length === 0) {
    return (
      <section className="w-[90vw] mx-auto mb-10 max-w-[1170px] flex flex-col gap-4 justify-center items-center ">
        <h1 className="font-bold text-lg">Save recipes you like</h1>
        <p>Tap the heart on recipes to save them for later!</p>
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="bg-red relative text-white rounded-md"
        >
          <Link href={"/"} className="py-2 px-4 block">
            Find Recipes To Save
          </Link>
        </motion.div>
      </section>
    );
  }
  return (
    <section className="w-[90vw] mx-auto mb-10 max-w-[1170px] grid grid-cols-auto-fill gap-4">
      {meals?.map(filteredMeal => {
        return <FavoriteMealCard key={filteredMeal.id} {...filteredMeal} />;
      })}
    </section>
  );
}
