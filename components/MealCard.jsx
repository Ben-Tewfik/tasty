import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import { FaRegHeart, FaHeart, FaTimes } from "react-icons/fa";
import {
  addDoc,
  collection,
  getDocs,
  query,
  serverTimestamp,
  where,
} from "firebase/firestore";
import { db } from "@/utils/firebase-config";

const MealCard = ({ idMeal: id, strMeal: meal, strMealThumb: img }) => {
  const [isHovered, setIsHovered] = useState(false);
  // collection ref
  const colRef = collection(db, "favoriteRecipes");
  // function that save favorite recipes
  async function addToFavoriteRecipes(strMeal) {
    try {
      const q = query(colRef, where("strMeal", "==", strMeal));
      const querySnapshot = await getDocs(q);
      if (querySnapshot.empty) {
        await addDoc(colRef, {
          strMeal: meal,
          strMealThumb: img,
          createdAt: serverTimestamp(),
        });
        // add tostify later
      } else {
        console.log("already exist");
      }
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="rounded-lg relative">
      {/* button for adding recipes to my favorite meals */}
      <motion.button
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        whileHover={{ scale: 1.2 }}
        transition={{ duration: 0.2 }}
        onClick={() => addToFavoriteRecipes(meal)}
        className="absolute top-2 right-2 size-8 rounded-full bg-red flex justify-center items-center z-10"
      >
        {isHovered ? <FaHeart color="white" /> : <FaRegHeart color="white" />}
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
  );
};
export default MealCard;
