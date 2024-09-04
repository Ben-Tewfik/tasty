import SectionTitle from "./SectionTitle";
import Image from "next/image";
import Link from "next/link";

export default function RecipeCategories({ categories }) {
  return (
    <section className="w-[90%] max-w-[1170px] mx-auto mb-14">
      <SectionTitle>highlights</SectionTitle>
      <div className="grid grid-cols-3 gap-y-8 md:grid-cols-5 lg:grid-cols-7">
        {categories.map(mealsCategory => {
          const {
            idCategory: id,
            strCategory: category,
            strCategoryThumb,
          } = mealsCategory;
          return (
            <Link
              href={`/categories/${category}`}
              key={id}
              className="text-center mx-auto block w-[100px]"
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
