import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaTrashAlt } from "react-icons/fa";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "@/utils/firebase-config";

const FavoriteMealCard = ({ id, strMeal: meal, strMealThumb: img }) => {
  // function to delete the recipe

  const deleteRecipe = async Id => {
    // deleted doc reference
    const docRef = doc(db, "favoriteRecipes", Id);
    try {
      await deleteDoc(docRef);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="rounded-lg relative">
        {/* button for adding recipes to my favorite meals */}
        <motion.button
          whileHover={{ scale: 1.2 }}
          transition={{ duration: 0.2 }}
          onClick={() => deleteRecipe(id)}
          className="absolute top-2 right-2 size-8 rounded-full bg-red flex justify-center items-center z-10"
        >
          <FaTrashAlt color="white" />
        </motion.button>
        <Link href={`/singleMeal/${id}`} key={id} title={meal}>
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
              {meal?.length > 14 ? `${meal?.slice(0, 16)}...` : meal}
            </h2>
          </div>
        </Link>
      </div>
    </>
  );
};
export default FavoriteMealCard;
