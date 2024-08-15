import { useGlobalContext } from "@/contexts/RecipesContext";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function MealsRecipes() {
  const { recipes, loading } = useGlobalContext();
  const [hover, setHover] = useState(false);
  return (
    <>
      {recipes.length !== 0 && (
        <section
          className={`bg-grey absolute z-50 top-[70px] left-[170px] right-[135px] p-4 rounded-lg ${
            hover ? "hidden" : "block"
          }`}
        >
          {loading ? (
            <h1>loading...</h1>
          ) : (
            recipes?.slice(0, 5).map(recipe => {
              const { idMeal: id, strMeal: title, strMealThumb: img } = recipe;
              return (
                <Link
                  href={`/singleMeal/${id}`}
                  key={id}
                  className="flex items-center gap-4 bg-white mb-2 rounded-md"
                >
                  <div className="relative h-14 w-14">
                    <Image src={img} alt={`image ${title}`} fill />
                  </div>
                  <h1>{title}</h1>
                </Link>
              );
            })
          )}
        </section>
      )}
    </>
  );
}
