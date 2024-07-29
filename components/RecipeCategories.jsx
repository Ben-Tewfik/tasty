import { useGlobalContext } from "@/contexts/RecipesContext";
import SectionTitle from "./SectionTitle";
import Image from "next/image";
import Link from "next/link";

export default function RecipeCategories() {
  const { recipeCategories, setCategory } = useGlobalContext();
  return (
    <section className="w-[90%] max-w-[1170px] mx-auto py-10">
      <SectionTitle>highlights</SectionTitle>
      <div className="grid grid-cols-3 gap-y-8 md:grid-cols-5 lg:grid-cols-7">
        {recipeCategories.map(mealsCategory => {
          const {
            idCategory: id,
            strCategory: category,
            strCategoryThumb,
          } = mealsCategory;
          return (
            <Link
              href={`/category/${category}`}
              key={id}
              className="text-center mx-auto block w-[100px]"
              onClick={() => setCategory(category)}
            >
              <Image
                src={strCategoryThumb}
                alt={`${category} Image`}
                width={100}
                height={100}
                className="bg-grey h-[100px] object-cover rounded-full"
              ></Image>

              <h3 className="font-bold mt-4 text-dark">{category}</h3>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
