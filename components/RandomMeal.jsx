import Image from "next/image";
import Link from "next/link";

export default function RandomMeal({ randomMeal }) {
  console.log(randomMeal);
  const {
    idMeal: id,
    strMealThumb: img,
    strMeal: title,
    strInstructions: instructions,
  } = randomMeal;
  return (
    <section className="w-[90vw] relative mx-auto mb-10 max-w-[1170px]">
      <div className="relative  w-full rounded-xl h-96">
        <Image
          src={img}
          fill
          alt={`${title} Image`}
          className="object-cover rounded-xl"
        />
      </div>
      <div className="relative mt-[-60px] w-[85%] mx-auto p-8 text-center rounded-xl bg-pink">
        <h1 className="mb-4 font-bold capitalize text-xl">{title}</h1>
        <p className="mb-4">{instructions.slice(0, 200)}...</p>
        <Link
          href={`/singleMeal/${id}`}
          className="bg-red py-2 px-3 rounded-md text-white"
        >
          View Recipe
        </Link>
      </div>
    </section>
  );
}
