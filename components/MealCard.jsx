import Image from "next/image";
import Link from "next/link";
const MealCard = ({ idMeal: id, strMeal: meal, strMealThumb: img }) => {
  return (
    <Link
      href={`/singleMealByCategory/${id}`}
      key={id}
      className="rounded-lg relative"
      title={meal}
    >
      <div className="relative h-52 w-full mb-8 rounded-lg">
        <Image
          src={img}
          alt={`${meal} Image`}
          fill
          className="object-cover rounded-lg"
        />
      </div>
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 w-10/12 bg-white px-4 py-2 rounded-md shadow-lg">
        <h2 className="text-red text-center font-bold">
          {meal.length > 14 ? `${meal?.slice(0, 16)}...` : meal}
        </h2>
      </div>
    </Link>
  );
};
export default MealCard;
