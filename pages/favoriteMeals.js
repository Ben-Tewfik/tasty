import FavoriteMealsRecipes from "@/components/FavoriteMealsRecipes";
import { Loader } from "@/components/Loader";
import SectionTitle from "@/components/SectionTitle";
import { useGlobalContext } from "@/contexts/RecipesContext";
import { db } from "@/utils/firebase-config";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { useRouter } from "next/router";
import { useEffect, useLayoutEffect, useState } from "react";

export default function FavoriteMeals() {
  const { currentUser, loading } = useGlobalContext();
  const [favoriteRecipes, setFavoriteRecipes] = useState([]);
  const [favoriteRecipesLoading, setFavoriteRecipesLoading] = useState(true);
  // router
  const router = useRouter();
  //    collection ref
  const colRef = collection(db, "favoriteRecipes");
  const q = query(colRef, orderBy("createdAt"));
  useEffect(() => {
    const unsubscribe = onSnapshot(q, snapshot => {
      const myFavoriteRecipes = snapshot.docs.map(doc => ({
        ...doc.data(),
        id: doc.id,
      }));
      setFavoriteRecipes(myFavoriteRecipes);
      setFavoriteRecipesLoading(false);
    });
    return () => unsubscribe();
  }, [q]);
  useLayoutEffect(() => {
    if (!currentUser) {
      router.push("/");
    }
  }, [currentUser, router]);

  if (loading || (!loading && !currentUser) || favoriteRecipesLoading) {
    return (
      <section className="h-[70vh] flex justify-center items-center">
        <Loader />
      </section>
    );
  }

  return (
    <>
      <SectionTitle>My favorite recipes</SectionTitle>
      <FavoriteMealsRecipes meals={favoriteRecipes} />
    </>
  );
}
