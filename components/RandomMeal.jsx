import Image from "next/image";
import Link from "next/link";

export default function RandomMeal({ randomMeal }) {
  const {
    idMeal: id,
    strMealThumb: img,
    strMeal: title,
    strInstructions: instructions,
  } = randomMeal;
  return (
    <section className="w-[90vw] relative mx-auto mb-14 max-w-[1170px]">
      <div className="relative w-full md:w-[60%] rounded-xl h-96">
        <Image
          src={img}
          fill
          alt={`${title} Image`}
          className="object-cover rounded-xl"
        />
      </div>
      <div className="relative mt-[-60px]  md:mt-0 w-[85%] md:h-72 md:absolute md:top-10 md:bottom-10 lg:top-14 lg:py-10 lg:bottom-14 md:right-5 md:w-[45%] mx-auto p-8 md:flex md:flex-col md:items-center md:justify-center text-center rounded-xl bg-pink">
        <h1 className="mb-4 font-bold capitalize text-xl">{title}</h1>
        <p className="mb-4 text-justify">{instructions.slice(0, 200)}...</p>
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
